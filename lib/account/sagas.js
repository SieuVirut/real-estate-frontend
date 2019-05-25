import { delay } from 'redux-saga'
import { all, call, put, take, takeLatest, takeEvery, fork } from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'
import { actionTypes, setUserInfo } from './actions'
import { failure } from '../layout/actions'
import endpoint from '../../common/endpoint'
import Router from 'next/router'

es6promise.polyfill()

function* fetchUserInfoSaga(options) {
  try {
    const body = {
      "session": {
        "email": options.values.email,
        "password": options.values.password
      }
    }
    const res = yield fetch(endpoint.account.login, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    })
    const data = yield res.json()
    if (data && data.jwt) {
      localStorage.setItem('resUserToken', `Bearer ${data.jwt}`)
      Router.push('/properties')
    }
  } catch (err) {
    yield put(failure(err))
    
  }
}

function* checkSessionLogin() {
  try {
    let userInfo = []
    const token = yield localStorage.getItem('resUserToken')
    const res = yield fetch(endpoint.account.userInfo, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    })
    const data = yield res.json()
    userInfo = data && data.user
    if (!userInfo) {
      localStorage.removeItem('resUserToken')
      // Router.push('/user/login')
    }
      yield put(setUserInfo(userInfo))
  } catch (err) {
    yield put(failure(err))
  }
}

export default all([
  takeLatest(actionTypes.FETCH_USER_INFO, fetchUserInfoSaga),
  takeLatest(actionTypes.CHECK_SESSION_USER_LOGIN, checkSessionLogin)
])

import { delay } from 'redux-saga'
import { all, call, put, take, takeLatest, takeEvery, fork } from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'
import { actionTypes, setListProject } from './actions'
import { failure } from '../layout/actions'
import endpoint from '../../common/endpoint'

es6promise.polyfill()

function* fetchListProjectSaga(options) {
  try {
    const keyword = options && options.keyword
    let res
    const token = yield localStorage.getItem('resUserToken')
    const configs = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    }

    if (keyword) {
      res = yield fetch(endpoint.project.listProjectHasKey(keyword), configs)
    } else {
      res = yield fetch(endpoint.project.listProjectNoKey, configs)
    }
    
    const data = yield res.json()
    yield put(setListProject(data.data))

  } catch (err) {
    yield put(failure(err))
  }
}

export default all([
  takeLatest(actionTypes.FETCH_LIST_PROJECT, fetchListProjectSaga),
])

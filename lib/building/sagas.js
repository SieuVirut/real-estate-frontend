import { delay } from 'redux-saga'
import { all, call, put, take, takeLatest, takeEvery, fork } from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'
import { actionTypes, setListBuilding, clearListBuilding } from './actions'
import { failure } from '../layout/actions'
import endpoint from '../../common/endpoint'

es6promise.polyfill()

function* fetchListBuildingSaga(options) {
  try {
    yield put(clearListBuilding())
    const projectId = options && options.projectId
    const token = yield localStorage.getItem('resUserToken')
    const configs = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    }
    const res = yield fetch(endpoint.building.listBuildingByProjectId(projectId), configs)
    const data = yield res.json()
    yield put(setListBuilding(data.data))

  } catch (err) {
    yield put(failure(err))
  }
}

export default all([
  takeLatest(actionTypes.FETCH_LIST_BUILDING, fetchListBuildingSaga),
])

import { delay } from 'redux-saga'
import { all, call, put, take, takeLatest, takeEvery, fork } from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'
import { actionTypes, setListFloor } from './actions'
import { failure } from '../layout/actions'
import endpoint from '../../common/endpoint'

es6promise.polyfill()

function* fetchListFloorSaga(options) {
  try {
    yield put(setListFloor({}))
    const buildingId = options && options.buildingId
    const token = yield localStorage.getItem('resUserToken')
    const configs = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    }
    const res = yield fetch(endpoint.floor.listFloorByBuilding(buildingId), configs)
    const data = yield res.json()
    yield put(setListFloor(data.data))
    
  } catch (err) {
    yield put(failure(err))
  }
}

export default all([
  takeLatest(actionTypes.FETCH_LIST_FLOOR, fetchListFloorSaga),
])

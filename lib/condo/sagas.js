import { delay } from 'redux-saga'
import { all, call, put, take, takeLatest, takeEvery, fork } from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'
import { actionTypes, setListCondos, setListCondosByFloor, cleanListCondosByFloor } from './actions'
import { failure } from '../layout/actions'
import endpoint from '../../common/endpoint'
es6promise.polyfill()

function* fetchListCondosSaga(options) {
  try {
    let data = []
    const res = yield fetch(endpoint.condos.listCondos)
    const json = yield res.json()
    data = json['data']
    yield put(setListCondos(data))
  } catch (err) {
    yield put(failure(err))
  }
}

function* fetchListCondosByFloorSaga(options) {
  try {
    yield put(cleanListCondosByFloor())
    const floorId = options && options.floorId
    const res = yield fetch(endpoint.condos.listCondosByFloor(floorId))
    const data = yield res.json()
    yield put(setListCondosByFloor(data.data))
  } catch (err) {
    yield put(failure(err))
  }
}


export default all([
  takeLatest(actionTypes.FETCH_LIST_CONDOS, fetchListCondosSaga),
  takeLatest(actionTypes.FETCH_LIST_CONDOS_BY_FLOOR, fetchListCondosByFloorSaga),

])

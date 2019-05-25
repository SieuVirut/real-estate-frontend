import { delay } from 'redux-saga'
import { all, call, put, take, takeLatest, takeEvery, fork } from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'
import { actionTypes, addFavoritesToProperty } from './actions'
import { failure } from '../layout/actions'
import endpoint from '../../common/endpoint'
es6promise.polyfill()

function* addFavoritesToPropertySaga(options) {
  try {

    let propertyId = options && options.propertyId
    let data = { favorite: { property_id: parseInt(propertyId) } }
    let token = yield localStorage.getItem('resUserToken')
    let configs = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    }
    yield fetch(endpoint.activities.addFavorites, configs)
  } catch (err) {
    yield put(failure(err))
  }
}


export default all([
  takeLatest(actionTypes.ADD_FAVORITE_TO_PROPERTY, addFavoritesToPropertySaga),

])

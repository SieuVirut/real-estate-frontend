import { delay } from 'redux-saga'
import { all, call, put, take, takeLatest, takeEvery, fork } from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'
import { actionTypes, setListProperty, createProperty, increaseViewProperty } from './actions'
import { failure } from '../layout/actions'
import endpoint from '../../common/endpoint'

es6promise.polyfill()

function* fetchListPropertySaga(options) {
  try {
    yield put(setListProperty({}))
    const projectId = options && options.projectId
    const token = yield localStorage.getItem('resUserToken')
    const configs = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    }
    const res = yield fetch(endpoint.property.listProperty, configs)
    const data = yield res.json()
    yield put(setListProperty(data.data))
  } catch (err) {
    yield put(failure(err))
  }
}

function* createPropertySaga(options) {
  try {
    const token = yield localStorage.getItem('resUserToken')
    const data = options && options.data || {}
    console.log("dât", data)
    const propertyData = data && data.property
    console.log("propertyData", propertyData)
    const fd = new FormData()

    for (let key in propertyData) {
      // console.log(`obj.${key} = ${propertyData[key]}`);
      if(key === 'new_image_path') {
        fd.append(`property[new_image_path][]`, propertyData[key], '11111.jpg')
      } else {
        fd.append(`property[${key}]`, propertyData[key])
      }
    }
    // propertyData.forEach((key, value) => {
    //   console.log('propertyData',key, value)
    // });
    // fd.append('property[condo_id]', 1)
    const configs = {
      method: 'POST',
      // body: JSON.stringify(data),
      body: fd,
      headers: {
        'Authorization': token
      },
    }
    const res = yield fetch(endpoint.property.createProperty, configs)
    const d = yield res.json()
    console.log('ddddd', d)
  } catch (err) {
    yield put(failure(err))
  }
}

function* increaseViewPropertySaga(options) {
  try {
    const token = yield localStorage.getItem('resUserToken')
    const propertyId = options && options.propertyId
    const configs = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
    }
    yield fetch(endpoint.property.increaseViewProperty(propertyId), configs)
  } catch (err) {
    yield put(failure(err))
  }
}


export default all([
  takeLatest(actionTypes.FETCH_LIST_PROPERTIES, fetchListPropertySaga),
  takeLatest(actionTypes.CREATE_PROPERTY, createPropertySaga),
  takeLatest(actionTypes.INCREASE_VIEW_PROPERTY, increaseViewPropertySaga)
])

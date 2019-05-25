import { all } from 'redux-saga/effects'

import account from './account/sagas'
import condo from './condo/sagas'
import project from './project/sagas'
import property from './property/sagas'
import building from './building/sagas'
import floor from './floor/sagas'
import activities from './activities/sagas'

function* rootSaga() {
  yield all([
    account,
    condo,
    project,
    property,
    building,
    floor,
    activities,

  ])
}

export default rootSaga

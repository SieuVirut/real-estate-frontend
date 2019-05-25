
import { combineReducers } from 'redux'

import layout from './layout/reducers'
import condos from './condo/reducers'
import account from './account/reducers'
import project from './project/reducers'
import property from './property/reducers'
import building from './building/reducers'
import floor from './floor/reducers'

export default combineReducers({
  layout,
  account,
  condos,
  project, 
  property,
  building,
  floor,
})
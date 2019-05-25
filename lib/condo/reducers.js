import { actionTypes } from './actions'

export const initialState = {
  listCondos: {},
  listCondosByFloor: {},
  condoDetail: {},
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_LIST_CONDOS:
      return {
        ...state,
        ...{ listCondos: action.listCondos }
      }
    case actionTypes.SET_LIST_CONDOS_BY_FLOOR:
      return {
        ...state,
        ...{ listCondosByFloor: action.data }
      }
    case actionTypes.CLEAN_LIST_CONDOS_BY_FLOOR:
      return {
        ...state,
        ...{listCondosByFloor: {}}
      }
    default:
      return state
  }
}

export default reducer
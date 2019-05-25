import { actionTypes } from './actions'

export const initialState = {
  listBuilding: {}
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_LIST_BUILDING:
      return {
        ...state,
        ...{ listBuilding: action.data }
      }

    case actionTypes.CLEAR_LIST_BUILDING:
      return {
        ...state,
        ...{ listBuilding: {} }
      }
    default:
      return state
  }
}

export default reducer
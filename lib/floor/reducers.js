import { actionTypes } from './actions'

export const initialState = {
  listFloors: {}
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_LIST_FLOOR:
      return {
        ...state,
        ...{ listFloors: action.data }
      }
    case actionTypes.CLEAR_LIST_FLOOR:
      return {
        ...state,
        ...{ listFloors: {} }
      }
    default:
      return state
  }
}

export default reducer
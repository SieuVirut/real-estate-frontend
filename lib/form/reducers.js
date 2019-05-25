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
    default:
      return state
  }
}

export default reducer
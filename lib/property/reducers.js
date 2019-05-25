import { actionTypes } from './actions'

export const initialState = {
  listProperty: {}
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_LIST_PROPERTY:
      return {
        ...state,
        ...{ listProperty: action.data }
      }
    default:
      return state
  }
}

export default reducer
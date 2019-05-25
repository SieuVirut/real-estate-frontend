import { actionTypes } from './actions'

export const initialState = {
  listProject: {}
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_LIST_PROJECT:
      return {
        ...state,
        ...{ listProject: action.data }
      }
    default:
      return state
  }
}

export default reducer
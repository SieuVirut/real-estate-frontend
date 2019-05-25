import { actionTypes } from './actions'

export const initialState = {
  userInfo: {},
  listUser: {}
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_USER_INFO:
      return {
        ...state,
        ...{ userInfo: action.info }
      }
    default:
      return state
  }
}

export default reducer
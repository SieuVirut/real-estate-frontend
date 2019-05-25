import { actionTypes } from './actions'

export const layoutInititalState = {
  error: {},
  body: {},
}

function layoutState(state = layoutInititalState, action) {
  switch (action.type) {

    case actionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error }
      }

    case actionTypes.WINDOW_RESIZE:
      return {
        ...state,
        ...{
          body: {
            ...state.body,
            ...{ size: action.size }
          }
        }
      }
    default:
      return state
  }
}

export default layoutState

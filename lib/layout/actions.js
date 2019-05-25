export const actionTypes = {
  FAILURE: 'FAILURE',
  WINDOW_RESIZE: 'WINDOW_RESIZE',
}

export function failure(error) {
  return {
    type: actionTypes.FAILURE,
    error
  }
}

export function windowResize (size) {
  return {
    type: actionTypes.WINDOW_RESIZE,
    size
  }
}

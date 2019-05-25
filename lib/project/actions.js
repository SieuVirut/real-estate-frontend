export const actionTypes = {
  FETCH_LIST_PROJECT: 'FETCH_LIST_PROJECT',
  SET_LIST_PROJECT: 'SET_LIST_PROJECT',

}

export function fetchListProject(keyword) {
  return {
    type: actionTypes.FETCH_LIST_PROJECT,
    keyword
  }
}

export function setListProject(data) {
  return {
    type: actionTypes.SET_LIST_PROJECT,
    data,
  }
}


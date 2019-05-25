export const actionTypes = {
  FETCH_LIST_BUILDING: 'FETCH_LIST_BUILDING',
  SET_LIST_BUILDING: 'SET_LIST_BUILDING',
  CLEAR_LIST_BUILDING: 'CLEAR_LIST_BUILDING',

}

export function fetchListBuilding(projectId) {
  return {
    type: actionTypes.FETCH_LIST_BUILDING,
    projectId
  }
}

export function setListBuilding(data) {
  return {
    type: actionTypes.SET_LIST_BUILDING,
    data,
  }
}


export function clearListBuilding() {
  return {
    type: actionTypes.CLEAR_LIST_BUILDING,
  }
}
export const actionTypes = {
  FETCH_LIST_FLOOR: 'FETCH_LIST_FLOOR',
  SET_LIST_FLOOR: 'SET_LIST_FLOOR',

}

export function fetchListFloor(buildingId) {
  return {
    type: actionTypes.FETCH_LIST_FLOOR,
    buildingId
  }
}

export function setListFloor(data) {
  return {
    type: actionTypes.SET_LIST_FLOOR,
    data,
  }
}


export const actionTypes = {
  SET_LIST_CONDOS: 'SET_LIST_CONDOS',
  FETCH_LIST_CONDOS: 'FETCH_LIST_CONDOS',
  FETCH_LIST_CONDOS_BY_FLOOR: 'FETCH_LIST_CONDOS_BY_FLOOR',
  SET_LIST_CONDOS_BY_FLOOR: 'SET_LIST_CONDOS_BY_FLOOR',
  CLEAN_LIST_CONDOS_BY_FLOOR: 'CLEAN_LIST_CONDOS_BY_FLOOR',
}

export function setListCondos(listCondos) {
  return {
    type: actionTypes.SET_LIST_CONDOS,
    listCondos
  }
}

export function fetchListCondos(token, buildingId) {
  return {
    type: actionTypes.FETCH_LIST_CONDOS,
    token,
    buildingId
  }
}

export function fetchListCondosByFloor(floorId) {
  return {
    type: actionTypes.FETCH_LIST_CONDOS_BY_FLOOR,
    floorId
  }
}

export function setListCondosByFloor(data) {
  return {
    type: actionTypes.SET_LIST_CONDOS_BY_FLOOR,
    data,
  }
}

export function cleanListCondosByFloor(){
  return {
    type: actionTypes.CLEAN_LIST_CONDOS_BY_FLOOR
  }
}
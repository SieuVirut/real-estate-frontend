export const actionTypes = {
  FETCH_LIST_PROPERTIES: 'FETCH_LIST_PROPERTIES',
  SET_LIST_PROPERTY: 'SET_LIST_PROPERTY',
  CREATE_PROPERTY: 'CREATE_PROPERTY',
  INCREASE_VIEW_PROPERTY: 'INCREASE_VIEW_PROPERTY',

}

export function fetchListProperties() {
  return {
    type: actionTypes.FETCH_LIST_PROPERTIES,
    
  }
}

export function setListProperty(data) {
  return {
    type: actionTypes.SET_LIST_PROPERTY,
    data,
  }
}

export function createProperty(data) {
  return {
    type: actionTypes.CREATE_PROPERTY,
    data
  }
}

export function increaseViewProperty(propertyId) {
  return { 
    type: actionTypes.INCREASE_VIEW_PROPERTY,
    propertyId
  }
}


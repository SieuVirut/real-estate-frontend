export const actionTypes = {
  ADD_FAVORITE_TO_PROPERTY: 'ADD_FAVORITE_TO_PROPERTY',

}

export function addFavoritesToProperty(propertyId) {
  return {
    type: actionTypes.ADD_FAVORITE_TO_PROPERTY,
    propertyId
  }
}


export const serverApiUrl = 'http://localhost:8000'
const prefix = `${serverApiUrl}/api/v1`

export default {
	account: {
		register: `${prefix}/registrations`,
		login: `${prefix}/sessions`,
		listUser: `${prefix}/users`,
		userInfo: `${prefix}/current_user`,
		updateUser: (userId) => `${prefix}/users/${userId}`,
		deleteUser: (userId) => `${prefix}/users/${userId}`
	},
	condos: {
		createCondos: `${prefix}/condos`,
		updateCondos: (condoId) => `${prefix}/condos/${condoId}`,
		listCondos: `${prefix}/condos`,
		listCondosByFloor: floorId => `${prefix}/condos?floor_id=${floorId}`,
		detailCondo: (condoId) => `${prefix}/condos/${condoId}`,
		listFloorsByBuilding: `${prefix}/developers`,
		deleteCondo: (condoId) => `${prefix}/condos/${condoId}`
	},
	project: {
		listProjectHasKey: (keyword) => `${prefix}/projects?keyword="${keyword}"`,
		listProjectNoKey: `${prefix}/projects`,
	},
	building: {
		listBuildingByProjectId: (projectId) => `${prefix}/buildings?project=${projectId}`,
	},
	floor: {
		listFloorByBuilding: buildingId => `${prefix}/floors?building_id=${buildingId}`,
	},
	property: {
		listProperty: `${prefix}/properties`,
		createProperty: `${prefix}/properties`,
		increaseViewProperty: propertyId => `${prefix}/properties/${propertyId}/increase-view`,
	},
	files: {
		uploadFiles: `${prefix}/files`,
	},
	activities: {
		addFavorites: `${prefix}/favorites`,
	}

}

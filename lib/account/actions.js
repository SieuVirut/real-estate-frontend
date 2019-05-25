export const actionTypes = {
  FETCH_USER_INFO: 'FETCH_USER_INFO',
  SET_USER_INFO: 'SET_USER_INFO',
  CHECK_SESSION_USER_LOGIN: 'CHECK_SESSION_USER_LOGIN',

}

export function fetchUserInfo(values) {
  return {
    type: actionTypes.FETCH_USER_INFO,
    values,
  }
}

export function setUserInfo(info) {
  return {
    type: actionTypes.SET_USER_INFO,
    info
  }
}

export function checkSessionUserLogin() {
  return {
    type: actionTypes.CHECK_SESSION_USER_LOGIN,
  }
} 

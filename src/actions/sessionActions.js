export const SESSION_LOGIN = 'SESSION_LOGIN'
export const SESSION_LOGOUT = 'SESSION_LOGOUT'
import { DataService } from '../providers/dataService'
export const login = () => (dispatch) => {
  const _dataService = new DataService()
  _dataService.get('/api/account/profile').then((res) => console.log(res))
  dispatch({
    type: SESSION_LOGIN
  })
}

export const logout = () => (dispatch) =>
  dispatch({
    type: SESSION_LOGOUT
  })

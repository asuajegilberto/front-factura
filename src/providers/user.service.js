import { DataService } from 'providers/dataService'
import { StorageService } from 'utils/storage'

export class UserProvider {
  constructor() {
    this.dataService = new DataService()
    this.storageService = new StorageService()
  }

  login(username, password) {
    let body = {
      entidad: 'Usuario',
      parametros: {
        user: username,
        password: password
      }
    }
    let endpoint = '/consulta'
    return this.dataService.post(endpoint, body, '0101001', username)
  }

  forgotPassword(email) {
    let body = {
      tipoConsulta: 1,
      entidad: 'Usuario',
      parametros: {
        email: email
      }
    }
    let endpoint = '/consulta'
    return this.dataService.post(endpoint, body, '0101002')
  }

  getUser() {
    return this.storageService.getSession()
  }

  logout() {
    this.storageService.removeSession()
  }

  isAuthenticated() {
    let user = JSON.parse(localStorage.getItem('token'))
    return user && user.role
  }
}

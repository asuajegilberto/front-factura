export class StorageService {
  saveSession(data) {
    localStorage.setItem('token', JSON.stringify(data))
  }
  getSession() {
    return JSON.parse(localStorage.getItem('token'))
  }
  removeSession() {
    localStorage.removeItem('token')
  }
}

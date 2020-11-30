import config from '../config/enviroment'
import { DisplayMessage } from '../notifications/displayMessage'
import { StorageService } from '../utils/storage'
import axios from '../utils/axios'

export class DataService {
  get(endpoint, body = null) {
    let trama = {
      headerIn: this.headerIn(),
      bodyIn: body
    }
    const requestOptions = {
      method: 'POST',
      headers: this.header(),
      body: JSON.stringify(trama)
    }
    let api_endpoint = endpoint

    return axios.get(api_endpoint, requestOptions)
  }

  header() {
    let header = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
    return header
  }

  headerIn() {
    let token = new StorageService().getSession()
    let headerIn = config.headerIn
    if (token) {
      headerIn.token = token
    }

    return headerIn
  }
}

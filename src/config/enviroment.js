const headerIn = {
  dispositivo: null,
  canal: null,
  medio: null,
  aplicacion: null,
  tipoTransaccion: null,
  usuario: null,
  uuid: null,
  fechaHora: null,
  idioma: null,
  empresa: null,
  geolocalizacion: null,
  token: ''
}
let url = 'http://localhost:8080/symfony-base/public/index.php'
const config = {
  api: url,
  headerIn: headerIn
}

export default config

import { Component } from 'react'
import Swal from 'sweetalert2'

export class DisplayMessage extends Component {
  constructor(props) {
    super(props)
  }

  notify(message) {
    return Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 1500
    })
  }
  error(message) {
    return Swal.fire({
      icon: 'Error',
      title: 'Oops...',
      text: message
    })
  }
  success(message) {
    return Swal.fire({
      icon: 'success',
      title: 'Completado',
      text: message
    })
  }
  info(message) {
    return Swal.fire({
      title: 'Info',
      icon: 'info',
      text: message
    })
  }
  warn(message) {
    return Swal.fire({
      title: 'Advertencia',
      icon: 'warning',
      text: message,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        Swal.fire('Completado', 'success')
      }
    })
  }
}

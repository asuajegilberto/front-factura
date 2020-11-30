import React from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import {useStyles} from './style'
import useRouter from '../../utils/useRouter'
import axios from 'axios'
import config from '../../config/enviroment'



export default function User() {
    const classes = useStyles();


    const [values, setValues] = React.useState({
    
        email: '',
        password: '',
        phone:'',
        fullName:'',
        address:''
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };



    const { history } = useRouter()

    const handleBack =()=>{
        history.push(`/login`)
    }

    const handleSubmit = () => {
        let url = config.api + '/api/invoice/new'
        let data = {
            email: values.email,
            password: values.password,
            phone:values.phone,
            fullName:values.fullName,
            address:values.address
        }

        
        axios.post(url,data).then(res => {
          if(res.status === 200){
            history.push(`/login`)
          }else{
              alert('Ocurrio un error')
              history.push(`/login`)

          }
          
        })
    }
    return (

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Crear Usuario
        </Typography>
        <div className={classes.form} noValidate>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="email"
                name="email"
                autoComplete="Correo"
                value={values.email}
                onChange={handleChange("email")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="password"
                label="Contraseña"
                name="password"
                autoComplete="password"
                value={values.password}
                onChange={handleChange("password")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="phone"
                label="phone"
                type="phone"
                id="phone"
                autoComplete="phone"
                value={values.phone}
                onChange={handleChange("phone")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="fullName"
                label="fullName"
                type="fullName"
                id="fullName"
                autoComplete="fullName"
                value={values.fullName}
                onChange={handleChange("fullName")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="address"
                label="address"
                type="address"
                id="address"
                autoComplete="address"
                value={values.address}
                onChange={handleChange("address")}
              />
            </Grid>
            
            
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Crear
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleBack}
          >
            Volver
          </Button>
          
        </div>
      </div>
      
    </Container>
    )
}

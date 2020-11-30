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



export default function Invoice() {
    const classes = useStyles();


    const [values, setValues] = React.useState({
    
        description: '',
        productService: '',
        subTotal:'',
        discount:'',
        total:'',
        email:''
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };



    const { history } = useRouter()

    const handleBack =()=>{
        history.push(`/list`)
    }

    const handleSubmit = () => {
        let url = config.api + '/api/invoice/new'
        let data = {
            description: values.description,
            productService: values.productService,
            subTotal:values.subTotal,
            discount:values.discount,
            total:values.total,
            email:values.email
        }

        let header ={
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        }
        axios.post(url,data,header).then(res => {
          if(res.status === 200){
            history.push(`/list`)
          }else{
              alert('Ocurrio un error')
              history.push(`/list`)

          }
          
        })
    }
    return (

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Crear Factura
        </Typography>
        <div className={classes.form} noValidate>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="description"
                label="Description"
                name="description"
                autoComplete="descrition"
                value={values.description}
                onChange={handleChange("description")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="productService"
                label="Producto/Servicio"
                name="productService"
                autoComplete="productService"
                value={values.productService}
                onChange={handleChange("productService")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="subTotal"
                label="subTotal"
                type="subTotal"
                id="subTotal"
                autoComplete="subTotal"
                value={values.subTotal}
                onChange={handleChange("subTotal")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="discount"
                label="discount"
                type="discount"
                id="discount"
                autoComplete="discount"
                value={values.discount}
                onChange={handleChange("discount")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="total"
                label="total"
                type="total"
                id="total"
                autoComplete="total"
                value={values.total}
                onChange={handleChange("total")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="email"
                label="email"
                type="email"
                id="email"
                autoComplete="email"
                value={values.email}
                onChange={handleChange("email")}
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

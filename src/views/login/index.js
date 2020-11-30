import React,{useState} from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import {useStyles} from './style'
import axios from 'axios'
import config from '../../config/enviroment'
import useRouter from '../../utils/useRouter'




export default function Login() {
  const [values, setValues] = React.useState({
    
    email: '',
    password: '',
    
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const { history } = useRouter()
  const handleLogin = (e) => {
    
    let url = config.api + '/api/login_check'
    let data = {
        username: values.email,
        password: values.password
    }
    axios.post(url,data).then(res => {
      if(res.status === 200){
        localStorage.setItem("token", res.data.token);
        history.push(`/list`)
      }
      
    })
    
}


  const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <div className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange('email')}
            value={values.email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange('password')}
            value={values.password}
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => handleLogin()}
          >
            Sign In
          </Button>
          
        </div>
      </div>
      
    </Container>
    )
}

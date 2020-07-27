import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Alert} from '@material-ui/lab';

import {Link} from "react-router-dom"
import Paper from '@material-ui/core/Paper';

import IMAGE from "../../assets/images/phone.jpg"
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {connect} from "react-redux"
import {setCurrentUser} from "../../redux/user/user.actions"
import axios from "axios"

function Copyright() {



  return (
    
    <Typography variant="body2" color="textSecondary" align="center">
    {'Copyright © '}
   
    {"orkunmertgs41@gmail.com  "} 
    {'  '}
    {" "+new Date().getFullYear()}
    {'.'}
  </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${IMAGE})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const  SignInSide=(props)=> {
 





  const classes = useStyles();
  const [values,setvalues]=useState({
    email:"",password:"",role:"",confirm:""
  });
  const [error,seterror]=useState("")
  const [verify,setVerify]=useState(false)


  const onSubmit=async (event)=>{
    event.preventDefault();
    console.log("pressed")
const response=await axios.post("https://smart-form-techyroots.herokuapp.com/auth/signup",{email:values.email,password:values.password,re_password:values.confirm,role:values.role})
 
if(response.data.success){

  setVerify(true)
  setTimeout(() => {
    setVerify(false)
  }, 3000);
  
  
  
  }else{
    console.log(response)
    seterror(response.data.msg)

    setTimeout(() => {
        seterror("")
    }, 2500);

  
  
  }
  

}


  



    
  const onchangefunct=(event)=>{
  setvalues({...values,[event.target.name]:event.target.value})
  
  }
  const onsubmit=(event)=>{
    event.preventDefault();
    console.log({...values})
 
 

}
 

return (
    <Grid container component="main" className={classes.root} style={{marginTop:60,overflow:"hidden"}}>
      <CssBaseline />
      <Grid item xs={8} sm={4} md={7} className={classes.image} >



      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form className={classes.form} noValidate>
          <TextField
             
             variant="outlined"
             margin="normal"
             required
             fullWidth
             id="email"
             label="Email Address"
             name="email"
             autoComplete="email"
             value={values.email}
             autoFocus
             onChange={onchangefunct}
           />
            <TextField
             
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="role"
              label="role"
              name="role"
              autoComplete="role"
              value={values.role}
              autoFocus
              onChange={onchangefunct}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              value={values.password}
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
             
              onChange={onchangefunct}
            />
             <TextField
              variant="outlined"
              margin="normal"
              required
              value={values.confirm}
              fullWidth
              name="confirm"
              label="confirm password"
              type="password"
              id="password"
              
              onChange={onchangefunct}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={onSubmit}
            >
              Sign Up
            </Button>
            {error?(



<Alert severity="error">{error}</Alert>

    ):(null)}
     {verify?(



<Alert severity="success">Verify your email and Login !</Alert>

    ):(null)}
            <Grid container>
              <Grid item xs>
                <Link to="/login" >
                  <h4> I Have Already an Account</h4>
                 
                </Link>
              </Grid>
             
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    
  
    
    </Grid>
  );
}


const propsdispatch=(dispatch)=>(

{
  adduseraction1:(user) =>dispatch(setCurrentUser(user)),
  


}

)



export default connect(null,propsdispatch)(SignInSide)
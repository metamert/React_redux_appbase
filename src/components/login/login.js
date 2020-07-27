import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import axios from "axios"

import {Link} from "react-router-dom"

import Paper from '@material-ui/core/Paper';
import IMAGE from "../../assets/images/wall2.jpg"
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {connect} from "react-redux"
import {setCurrentUser} from "../../redux/user/user.actions"
import {Alert} from '@material-ui/lab';

function Copyright() {



  return (
    
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
     
        {"orkunmertgs41@gmail.com "}
        {"  "} 
      
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
    email:"",password:""
  });
  const [error,seterror]=useState("")
 
  const onSubmit=async (event)=>{
    event.preventDefault();
   if(!values.email||!values.password){
    seterror("email and password cannot be empty")

    setTimeout(() => {
        seterror("")
    }, 2500);
  

   }else{


    const response=await axios.post("https://smart-form-techyroots.herokuapp.com/auth/login",{username:values.email,password:values.password})

    console.log(response)
    if(response.data.data.username){
    
     
    props.adduseraction1(response.data.data)

    props.history.push("/")
    
    }else{
      console.log(response.data)
      
      seterror(response.data.msg)
    
      setTimeout(() => {
          seterror("")
      }, 2500);
    
    
    
    }









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
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={0} sm={12} md={7} className={classes.image}  >



      </Grid>
      <Grid item xs={12} sm={12} md={5} component={Paper} elevation={6} square style={{marginTop:60}}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
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
              value={values.password}
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
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
              Sign In
            </Button>
            {error?(



<Alert severity="error" >{error}</Alert>

    ):(null)}
            <Box mt={5}>
              <Copyright />

<div style={{width:"100%",justifyContent:"center",display:"flex",marginTop:50}}>
            <Link to="/register" style={{width:"100%"}}>
              <Button variant="contained" color="secondary"  size="large" style={{width:"100%"}}>
          
      
Don't have an account ?
        
        
        </Button>
        </Link>
        </div>
        <div style={{width:"100%",justifyContent:"center",display:"flex",marginTop:50}}>
            <Link to="/admin-login">
              <Button variant="contained" color="secondary"  size="large" >
          
      
Login  ADMIN 
        
        
        </Button>
        </Link>
        </div>
            </Box>
          </form>
        </div>
      </Grid>
    
    {props.error?(



<div>error</div>

    ):(null)}
    
    </Grid>
  );
}


const propsdispatch=(dispatch)=>(

{
  adduseraction1:(user) =>dispatch(setCurrentUser(user)),


}

)


export default connect(null,propsdispatch)(SignInSide)
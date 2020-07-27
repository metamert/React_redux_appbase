import React from "react"
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import {Button} from "@material-ui/core"
import { FaApple,FaMailBulk,FaSignOutAlt,FaHome ,FaSearchengin} from "react-icons/fa";
import ListItem from "@material-ui/core/ListItem";
import {Link} from 'react-router-dom';
// core components
import Header from "./header.ui.js";
import {connect} from "react-redux"
import {setCurrentUser} from "../../redux/user/user.actions"





import styles from "./navbarsStyle.js";
import { withRouter } from "react-router-dom";
const useStyles = makeStyles(styles);

const HHeader=(props)=>{
  const classes = useStyles();

const logOut=()=>{

  props.logOut()
  props.history.push("/login")
}
console.log(props)

  return(
<Header
   
    color="white"
    fixed
    changeColorOnScroll={{
        height: 400,
        color: "white"
      }}
leftLinks={
  <Link
            
  className={classes.navLink}
  
  color="transparent"
  to="/"
  
>
  <FaHome size={30} color="#872166" ></FaHome>
</Link>

}
    rightLinks={props.user?(

      <List className={classes.list}>
      
      
      <ListItem className={classes.listItem}>
      <Button
      onClick={logOut}
       style={{
        backgroundColor:"#872166", borderRadius:10, padding:"10px 20px",margin:5,color:"white"
      }}
      
          className={classes.navLink}
          color="transparent"
          
        >
          
          Logout
          
        </Button>
      
     
      </ListItem>
      <ListItem className={classes.listItem}>
      
      </ListItem>
      <ListItem className={classes.listItem}>
       
      </ListItem>
    </List>

    ):
      (

        <List className={classes.list}>
      
       
        <ListItem className={classes.listItem}>
        
        <Link
       
            className={classes.navLink}
            color="transparent"
            to="/login"
          >
            
         Login
           
          </Link> 
         
        
         
         
        </ListItem>
        <ListItem className={classes.listItem}>
        <Link
         style={{
          backgroundColor:"#872166", borderRadius:10, padding:"10px 20px",margin:5,color:"white"
        }}
            className={classes.navLink}
            color="transparent"
            to="/register"
          >
            
            Register
            
          </Link>
        
       
        </ListItem>
        <ListItem className={classes.listItem}>
        
        </ListItem>
        <ListItem className={classes.listItem}>
         
        </ListItem>
      </List>

      )
     
    }
  />

)


}


const StateToProps=(state)=>({
  user:state.user.currentUser
})

const DispatchToState=(dispatch)=>({
 logOut:() =>dispatch(setCurrentUser(null)),
})


export default connect(StateToProps,DispatchToState)(withRouter(HHeader));
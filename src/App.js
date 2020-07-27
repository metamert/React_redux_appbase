import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


import './App.css';
import Login from "./components/login/login"
import AdminLogin from "./components/login/admin.login"
import Register from "./components/SignUp/Signup"
import Header from "../src/components/header/header"
import HomePage from './pages/homepage/homepage.component';





class App extends React.Component {
 

  componentDidMount() {
    
  }

  componentWillUnmount() {
  
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/admin-login' component={AdminLogin} />
          <Route
            exact
            path='/login'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <Login />
              )
            }
          />
      
        </Switch>
      </div>
    );
  }
}


export default App




/*

  


          const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))

});


export default connect(
  null,
  mapDispatchToProps
)(App);
*/ 
import React, {useState, useEffect} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import CityPage from '../CityPage/CityPage';
import userService from '../../utils/userService'


function App() {

  const [user, setUser] = useState(userService.getUser()) // getUser decodes our JWT token, into a javascript object
  // this object corresponds to the jwt payload which is defined in the server signup or login function that looks like 
  // this  const token = createJWT(user); // where user was the document we created from mongo
  const [logo, setLogo] = useState("/logo-blue.png");
  
  
  function handleSignUpOrLogin(){
    setUser(userService.getUser()); // getting the user from localstorage decoding the jwt
  }

  function handleLogout(){
    userService.logout();
    setUser({user: null})
  }

  

  // useEffect(() => {
  //   if (citySearch) {
  //     fetch(zipFCUrl)

  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data)
  //       setCityFC(data);
  //     })
  //   }
  // }, [citySearch])




  return (
    <div className="App">
      <Switch>
          <Route exact path="/login">
             <LoginPage handleSignUpOrLogin={handleSignUpOrLogin} user={user} logo={logo}/>
          </Route>
          <Route exact path="/signup">
             <SignupPage handleSignUpOrLogin={handleSignUpOrLogin} user={user} logo={logo}/>
          </Route>
          {userService.getUser() ? (
             <Switch>
                <Route path="/cities">
                    <CityPage user={user} handleLogout={handleLogout} logo={logo}/>
                </Route>
                <Route exact path="/:username">
                    <ProfilePage user={user} handleLogout={handleLogout} logo={logo}/>
                </Route>
            </Switch>
          ) : (
            <Redirect to='/login'/>
          )}
  
      </Switch>
    </div>
  );
}

export default App;

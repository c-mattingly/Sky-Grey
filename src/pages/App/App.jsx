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
  const [citySearch, setCitySearch] = useState("Phoenix");
  const [city, setCity] = useState(null);
  const cityUrl = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API}`;
  console.log(cityUrl)
  
  function handleSignUpOrLogin(){
    setUser(userService.getUser()); // getting the user from localstorage decoding the jwt
  }

  function handleLogout(){
    userService.logout();
    setUser({user: null})
  }

  useEffect(() => {
    if (citySearch) {
      fetch(cityUrl)
      
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setCity(data)
        });
    }
  }, [citySearch]);

  function handleFormSubmit(city) {
    console.log(city)
    setCitySearch(city);
    setCity(null);
  }

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
                <Route path="/cities/:name">
                    <CityPage user={user} handleLogout={handleLogout} logo={logo} handleFormSubmit={handleFormSubmit} city={city} citySearch={citySearch}/>
                </Route>
                <Route exact path="/:username">
                    <ProfilePage user={user} handleLogout={handleLogout} logo={logo} handleFormSubmit={handleFormSubmit} city={city} citySearch={citySearch}/>
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

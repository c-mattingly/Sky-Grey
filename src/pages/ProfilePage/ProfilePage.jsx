import React, { useState, useEffect } from "react";
import { Grid, Loader } from "semantic-ui-react";
import userService from "../../utils/userService";
import PageHeader from "../../components/PageHeader/PageHeader";
import CityFeed from "../../components/CityFeed/CityFeed";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useParams } from "react-router-dom";
import * as cityAPI from "../../utils/cityApi";

export default function ProfilePage({ user, handleLogout, logo, setLogo}) {
    const [profileUser, setProfileUser] = useState({});
    const [cities, setCities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [zip, setZip] = useState("85034");
    const [city, setCity] = useState(null);
    const zipUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API}`;

    const { username } = useParams();

    async function getProfile() {
        try {
          const data = await userService.getProfile(username);
          console.log(data, " data");
          console.log(username)
    
          // data is the response from the controller function /api/users/profile
          // go to the controller function and look at what is returned
          setLoading(() => false);
          setProfileUser(() => data.user);
          setCities(() => data.cities);
        } catch (err) {
          console.log(err);
          setError("Profile does not Exist");
        }
      }


    async function addCity() {
        try {
            const data = await cityAPI.create(zip);
            console.log(data, " this is from addCity");
        
        } catch (err) {
          console.log(err);
        }
    }

    async function removeCity() {
        try {
            const data = await cityAPI.removeCity(zip)
        
        } catch (err) {
            console.log(err);
        }
    }

    function makeAPIWeatherCall(zipUrl) {
    
            fetch(zipUrl)
      
            .then((res) => res.json())
          }
    
    
    async function generateAPICalls() {
            const promises = cities.map((zip) => makeAPIWeatherCall(zip.zip))
            console.log(cities)
            const cityData = await Promise.all(promises)
              console.log(cityData)
              setCities(cityData)
          }

    useEffect(() => {
        getProfile();
    }, []);
     
    useEffect(() => {
        generateAPICalls();
    }, []);
    
      if (error) {
        return (
          <>
            <PageHeader user={user} handleLogout={handleLogout} logo={logo} setLogo={setLogo}/>
            <h1>{error}</h1>
          </>
        );
      }
    
      if (loading) {
        return (
          <Grid
            textAlign="center"
            style={{ height: "100vh" }}
            verticalAlign="middle"
          >
            <Grid.Column style={{ maxWidth: 450 }}>
              <Loader size="large" active>
                Loading
              </Loader>
            </Grid.Column>
          </Grid>
        );
      }
      return (
        <>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <PageHeader logo={logo} user={user} handleLogout={handleLogout}/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
            </Grid.Row>
            <Grid.Row centered >
                <Grid.Column textAlign="center">
                    <h1> {username}, here is the current weather in your cities</h1>
                    <hr />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <CityFeed 
                        city={city}
                        user={user}
                        numCitiesCol={3}
                        cities={cities}
                        addCity={addCity}
                        removeCity={removeCity} 
                    />
                </Grid.Column>
            </Grid.Row>
          </Grid>
        </>
      );
    }
    
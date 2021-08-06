import React, { useState, useEffect } from "react";
import { Grid, Loader } from "semantic-ui-react";
import userService from "../../utils/userService";
import PageHeader from "../../components/PageHeader/PageHeader";
import CityFeed from "../../components/CityFeed/CityFeed";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useParams } from "react-router-dom";
import * as cityAPI from "../../utils/cityApi";

export default function ProfilePage({ user, handleLogout, logo, setLogo, city, searchCity, handleFormSubmit}) {
    const [profileUser, setProfileUser] = useState({});
    const [cities, setCities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const { username } = useParams();

    async function getProfile() {
        try {
          const data = await userService.getProfile(username);
          console.log(data, " data");
          console.log(username)
    
          // data is the response from the controller function /api/users/profile
          // go to the controller function and look at what is returned
          // posts and user are the properties on the data object
          setLoading(() => false);
          setProfileUser(() => data.user);
        } catch (err) {
          console.log(err);
          setError("Profile does not Exist");
        }
      }

      async function addCity(userID) {
        try {
            const data = await cityAPI.create(userID);
            console.log(data, " this is from addCity");
            getProfile();
        } catch (err) {
          console.log(err);
        }
      }

      console.log(addCity);

      async function removeCity(cityID) {
          try {
              const data = await cityAPI.removeCity(cityID)
              getProfile();
          } catch (err) {
              console.log(err);
          }
      }

      useEffect(() => {
        getProfile();
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
                <PageHeader logo={logo} user={user} handleLogout={handleLogout} logo={logo}/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
              <SearchBar handleFormSubmit={handleFormSubmit} searchCity={searchCity} city={city}/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <h1> {username}, here is the current weather in your cities</h1>
                <hr />
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <CityFeed 
                        user={user}
                        numCitiesCol={3}
                        addCity={addCity}
                        removeCity={removeCity} 
                    />
                </Grid.Column>
            </Grid.Row>
          </Grid>
        </>
      );
    }
    
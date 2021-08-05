import React, { useState, useEffect } from "react";
import { Grid, Loader } from "semantic-ui-react";
import userService from "../../utils/userService";
import PageHeader from "../../components/PageHeader/PageHeader";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useParams } from "react-router-dom";

export default function CityPage({ user, handleLogout, logo, handleFormSubmit, city, searchCity}) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const { name } = useParams();


    // async function getCity() {
    //     try {
    //       const data = await userService.getCity(name);
    //       console.log(data, " data");
    //       console.log(name)
    
    //       // data is the response from the controller function /api/users/profile
    //       // go to the controller function and look at what is returned
    //       // posts and user are the properties on the data object
    //       setLoading(() => false);
    //       setCity(name)
    //     } catch (err) {
    //       console.log(err);
    //       setError("City Not Found");
    //     }
    //   }

    //   useEffect(() => {
    //     getCity();
    //   }, []);
    
    //   if (error) {
    //     return (
    //       <>
    //         <PageHeader user={user} handleLogout={handleLogout} logo={logo} setLogo={setLogo}/>
    //         <h1>{error}</h1>
    //       </>
    //     );
    //   }
    
    //   if (loading) {
    //     return (
    //       <Grid
    //         textAlign="center"
    //         style={{ height: "100vh" }}
    //         verticalAlign="middle"
    //       >
    //         <Grid.Column style={{ maxWidth: 450 }}>
    //           <Loader size="large" active>
    //             Loading
    //           </Loader>
    //         </Grid.Column>
    //       </Grid>
    //     );
    //   }

    return (
        <Grid centered>
            <Grid.Row>
              <Grid.Column>
                <PageHeader logo={logo} user={user} handleLogout={handleLogout} logo={logo}/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <SearchBar handleFormSubmit={handleFormSubmit} name={name} searchCity={searchCity} city={city}/>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <CurrentWeather user={user} name={name} searchCity={searchCity} city={city} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                  7-Day Forecast
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
              <Grid.Column>
                Map
              </Grid.Column>
            </Grid.Row>
          </Grid>
      );
}
import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import PageHeader from "../../components/PageHeader/PageHeader";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";
import SearchBar from "../../components/SearchBar/SearchBar";
import SevenDay from "../../components/SevenDay/SevenDay";
import { useParams } from "react-router-dom";
import * as cityAPI from "../../utils/cityApi"

export default function CityPage({ user, handleLogout, logo, handleFormSubmit, city, searchCity}) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const { zip } = useParams();
    console.log(useParams())
    console.log(zip)
    console.log(city)
    console.log(user.id)

    async function addCity(city) {
        console.log(user._id)
        try {
            const data = await cityAPI.create(city);
            console.log(data, " this is from addCity");
        
        } catch (err) {
          console.log(err);
        }
      }

      console.log(addCity);

      async function removeCity(cityID) {
          try {
              const data = await cityAPI.removeCity(cityID)
          
          } catch (err) {
              console.log(err);
          }
      }
console.log(user.city)

    return (
        <Grid centered>
            <Grid.Row>
              <Grid.Column>
                <PageHeader logo={logo} user={user} handleLogout={handleLogout} logo={logo}/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <SearchBar handleFormSubmit={handleFormSubmit} zip={zip} searchCity={searchCity} city={city}/>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <CurrentWeather zip={zip} city={city} user={user} addCity={addCity} removeCity={removeCity} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <SevenDay zip={zip}/>
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
import React, { useState, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import PageHeader from "../../components/PageHeader/PageHeader";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";
import SearchBar from "../../components/SearchBar/SearchBar";
import * as cityAPI from "../../utils/cityApi"

export default function CityPage({ user, handleLogout, logo}) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [zip, setZip] = useState("");
    const [city, setCity] = useState(null);
    const zipUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API}`;
    const zipFCUrl = `https://api.openweathermap.org/data/2.5/forecast?zip=${zip}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API}`

    function handleFormSubmit(zip) {
        setZip(zip);
      }

    async function addCity() {

        try {
            const data = await cityAPI.create(zip);
        
        } catch (err) {
          console.log(err);
        }
      }

      useEffect(() => {
        if (zip) {
    
          fetch(zipUrl)
    
          .then((res) => res.json())
          .then((data) => {
            setCity(data)
          });
        }
      }, [zip]);

    return (
        <Grid centered>
            <Grid.Row>
              <Grid.Column>
                <PageHeader logo={logo} user={user} handleLogout={handleLogout} logo={logo}/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <SearchBar handleFormSubmit={handleFormSubmit}/>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <CurrentWeather city={city} user={user} addCity={addCity} zip={zip}/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
              <Grid.Column>
              </Grid.Column>
            </Grid.Row>
          </Grid>
      );
}
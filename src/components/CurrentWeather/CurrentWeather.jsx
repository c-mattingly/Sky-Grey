import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image, Icon, Loader } from 'semantic-ui-react';

export default function CurrentWeather({
    city,
    user,
    addCity,
    removeCity,
    zip
}) {


    let liked = 0;

    const clickHandler = liked > -1 ? () => removeCity(user.city[liked]._id) : () => addCity(city._id);
    

    function roundDecimal(int) {
        return Math.round(int)
    }

    function degToDirection(num) {
        let val = Math.floor((num / 22.5) + 0.5);
        let arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
        return arr[(val % 16)];
    }
    console.log(zip)
    if ((city) && (city.name)) {

        return (
            <Card className="CurrentWeather-card" centered>

                <Card.Content>
                    <Image src={`/${city.weather[0].icon}.png`} style={{ height: '150px' }} />

                    <Card.Header><h1><span style={{ color: '#4FA4F9' }}>{city.name}</span></h1></Card.Header>
                    <hr />
                    <Card.Header>
                        <span style={{ color: '#FFFFFF' }}>{roundDecimal(city.main.temp)}°</span>
                    </Card.Header>
                    <Card.Header>
                        <span style={{ color: '#FFFFFF' }}>{city.weather[0].main}</span>
                    </Card.Header>


                    <Card.Description>
                        <span style={{ color: '#FFFFFF' }}><b>Feels Like:</b> {roundDecimal(city.main.feels_like)}°<br />
                            <b>Wind:</b> {degToDirection(city.wind.deg)} {roundDecimal(city.wind.speed)} mph <br />
                            <b>Humidity:</b> {city.main.humidity}%<br /></span>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra textAlign={"right"}>
                    <Link className="CurrentWeather-addCity" to={`/${user.username}`} onClick={()=>addCity(city._id)} >+</Link>
                </Card.Content>
            </Card>
        )
    } else {
        if (zip === "") {
            return <center><h1>Search For A Zip Code</h1></center>;
        } else if ((city) && (city.message === "city not found")) {
            return <center><h1>Not a valid zip code, try again</h1></center>;
        } else {
            return (
                <>
                <br/><br/>
                <br/>
                <Loader size="large" active>
                        Loading
                    </Loader>
                </>
            )
            
        }
        
    }
}
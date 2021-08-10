import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image, Icon } from 'semantic-ui-react';

export default function CurrentWeather({
    city,
    user,
    addCity,
    removeCity,
    zip
}) {


    const liked = -1;

    const clickHandler = liked > -1 ? () => removeCity(user.city[liked]._id) : () => addCity(city._id);
    const likeIcon = liked > -1 ? 'heart' : 'plus'
    const likeColor = liked > -1 ? 'red' : 'green'


    function roundDecimal(int) {
        return Math.round(int)
    }

    function degToDirection(num) {
        let val = Math.floor((num / 22.5) + 0.5);
        let arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
        return arr[(val % 16)];
    }
    console.log(city)
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
                    <Icon name={likeIcon} size="large" color={likeColor} onClick={clickHandler} />
                    <Icon name="minus" size="large" color="red" onClick={removeCity} />
                </Card.Content>
            </Card>
        )
    } else {
        return <center><h1>Not a valid zip code, try again</h1></center>;
    }
}
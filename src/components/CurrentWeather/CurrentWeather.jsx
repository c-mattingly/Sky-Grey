import React from 'react';
import {Link} from 'react-router-dom';
import { Card, Image, Icon } from 'semantic-ui-react';

export default function CurrentWeather({
    zip, 
    city, 
    user,
    isProfile,
    addCity,
    removeCity
}) {

    console.log(user.city)

// if (user.city) {
//     const liked = user.city.findIndex(city => city.zip === zip);
// } else {
//     const liked = -1;
// }

const liked = -1;

const clickHandler = liked > -1 ? () => removeCity(user.city[liked]._id) : () => addCity(city._id);
const likeIcon = liked > -1 ? 'heart' : 'plus'
const likeColor = liked > -1 ? 'red' : 'green'

    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1); 
      }

    function roundDecimal(int) {
        return Math.round(int)
      }

    function degToDirection(num) {
        let val = Math.floor((num / 22.5) + 0.5);
        let arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
        return arr[(val % 16)];
    }  
console.log(city)
console.log(zip)
    if ((zip) && (city)) {

        return (
            <Card className="CurrentWeather-card" centered>
                
            <Card.Content>
            <Image src={`/${city.weather[0].icon}.png`} style={{ height: '150px'}} />
            <hr />
            
            <Card.Header>{capitalizeFirstLetter(city.name)}</Card.Header>
            <Card.Header>
                {roundDecimal(city.main.temp)}°
            </Card.Header>
            <Card.Header>
                {city.weather[0].main}
            </Card.Header>
            
            
            <Card.Description>
                Feels Like: {roundDecimal(city.main.feels_like)}°<br/>
                Wind: {degToDirection(city.wind.deg)} {roundDecimal(city.wind.speed)} mph <br/>
                Humidity: {city.main.humidity}%<br/>
            </Card.Description>
            </Card.Content>
            <Card.Content extra textAlign={"right"}>
                <Icon name={likeIcon} size="large" color={likeColor} onClick={clickHandler}/>
            </Card.Content>
        </Card>
        )
        } else {
            return null;
        }
    }
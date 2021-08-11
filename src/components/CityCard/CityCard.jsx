import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { Card, Image, Icon } from 'semantic-ui-react';

export default function CityCard({ 
    city, 
    user,
    cities, 
    cityReport,
    addCity,
    removeCity,
    zip,
    c
}) {

    function roundDecimal(int) {
        return Math.round(int)
      }

    function degToDirection(num) {
        let val = Math.floor((num / 22.5) + 0.5);
        let arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
        return arr[(val % 16)];
    }  
    if ((c) && (c.name)) {

        return (
            <Card className="CityCard-card" centered>
                
            <Card.Content>
            <Card.Content extra textAlign={"right"}>
                <Icon name="x" size="large" color="red" onClick={removeCity}/>
            </Card.Content>
            <Image src={`/${c.weather[0].icon}.png`} style={{ height: '150px'}} />
            
            <Card.Header><h1><span style={{ color: '#4FA4F9'}}>{c.name}</span></h1></Card.Header>
            <hr />
            <Card.Header>
            <span style={{ color: '#FFFFFF'}}>{roundDecimal(c.main.temp)}°</span>
            </Card.Header>
            <Card.Header>
            <span style={{ color: '#FFFFFF'}}>{c.weather[0].main}</span>
            </Card.Header>
            
            
            <Card.Description>
            <span style={{ color: '#FFFFFF'}}><b>Feels Like:</b> {roundDecimal(c.main.feels_like)}°<br/>
                <b>Wind:</b> {degToDirection(c.wind.deg)} {roundDecimal(c.wind.speed)} mph <br/>
                <b>Humidity:</b> {c.main.humidity}%<br/></span>
            </Card.Description>
            </Card.Content>
            
        </Card>
        )
        } else {
            return null;
        }
    }
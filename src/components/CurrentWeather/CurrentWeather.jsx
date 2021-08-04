import React from 'react';
import {Link} from 'react-router-dom';
import { Card, Grid, Image } from 'semantic-ui-react';

export default function CurrentWeater({user, name}) {


    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }



    return (
        <Card fluid className="CurrentWeather=card">
            <Image fluid size="large" src='/sunny.png' />
        <Card.Content>
          <Card.Header>{capitalizeFirstLetter(name)}</Card.Header>
          <Card.Header>
            106°
          </Card.Header>
          <Card.Description>
            High: 106°
            Low:
            Feels Like:
            Wind:
            Humidity:
          </Card.Description>
        </Card.Content>
      </Card>
    )
}
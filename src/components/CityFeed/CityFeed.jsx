import React from "react";
import { Card, Loader, Grid, Dimmer, Segment, Image } from "semantic-ui-react";
import CurrentWeather from "../CurrentWeather/CurrentWeather";

export default function CityFeed({
    cities,
    numCitiesCol,
    isProfile,
    loading,
    addCity,
    removeCity,
    user,
    city
  }) {
    return (
      <Card.Group itemsPerRow={numCitiesCol} stackable>
        {loading ? (
          <Segment>
            <Dimmer active inverted>
              <Loader size="small">Loading</Loader>
            </Dimmer>
            <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
          </Segment>
        ) : null}
        {cities.map((c) => {
          return (
            <CurrentWeather
              cities={cities}
              key={c._id}
              addCity={addCity}
              removeCity={removeCity}
              user={user}
            />
          );
        })}
      </Card.Group>
    );
  }
  
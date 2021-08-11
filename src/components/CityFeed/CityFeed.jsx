import React, {useState} from "react";
import { Card, Loader, Grid, Dimmer, Segment, Image } from "semantic-ui-react";
import CityCard from "../CityCard/CityCard";

export default function CityFeed({
    cities,
    numCitiesCol,
    cityReport,
    loading,
    addCity,
    removeCity,
    user,
    city
  }) {

    return (
      <Card.Group itemsPerRow={numCitiesCol} centered stackable>
        {loading ? (
          <Segment>
            <Dimmer active inverted>
              <Loader size="small">Loading</Loader>
            </Dimmer>
            <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
          </Segment>
        ) : null}

        {cityReport.map((c, index) => {
            
          return (
            <CityCard
              c={c}
              cities={cities}
              cityReport={cityReport}
              key={index}
              addCity={addCity}
              removeCity={removeCity}
              user={user}
              index={index}
            />
          );
        })}
      </Card.Group>
    );
  }
  
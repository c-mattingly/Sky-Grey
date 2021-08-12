import React from "react";
import { Card, Loader, Dimmer, Segment, Image } from "semantic-ui-react";
import CityCard from "../CityCard/CityCard";

export default function CityFeed({
    numCitiesCol,
    cityReport,
    loading,
    removeCity,
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
              key={index}
              removeCity={removeCity}
            />
          );
        })}
      </Card.Group>
    );
  }
  
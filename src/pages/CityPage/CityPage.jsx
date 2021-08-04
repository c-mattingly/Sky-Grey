import React, { useState, useEffect } from "react";
import { Grid, Loader } from "semantic-ui-react";
import userService from "../../utils/userService";
import PageHeader from "../../components/PageHeader/PageHeader";
import { useParams } from "react-router-dom";

export default function CityPage(props) {



    return (
        <Grid>
            <Grid.Row>
              <Grid.Column>
                <PageHeader user={user} handleLogout={handleLogout}/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <h1> {username}, here is the current weather in your cities</h1>
                <hr />
              </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
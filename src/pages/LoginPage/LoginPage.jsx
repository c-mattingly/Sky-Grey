import React, { useState } from 'react';
import './LoginPage.css';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import userService from '../../utils/userService';
import { useHistory, Link } from "react-router-dom";
import {
    Button,
    Form,
    Grid,
    Image,
    Header,
    Message,
    Segment,
  } from "semantic-ui-react";


export default function LoginPage(props){
    const [error, setError] = useState("");
    const [state, setState] = useState({
        email: "",
        password: "",
    });

    function handleChange(e) {
      setState({
        ...state,
        [e.target.name]: e.target.value,
      });
    }
  
    async function handleSubmit(e) {
      e.preventDefault();
      try {
        await userService.login(state);
        props.handleSignUpOrLogin();
       
      } catch (err) {
        // Invalid user data (probably duplicate email)
        setError(err.message);
      }
    }

    return (
        <>
        <Grid
          textAlign="center"
          style={{ height: "100vh" }}
          verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header>
                <Image src="/logo.png" style={{ width: '500px', height: '152px'}}/>
            </Header>
            <Header as="h2" textAlign="center">
              Log In To Your Account
            </Header>
            <Form autoComplete="off" onSubmit={handleSubmit}>
              <Segment stacked>
                <Form.Input
                  type="email"
                  name="email"
                  placeholder="email"
                  value={state.email}
                  onChange={handleChange}
                  required
                />
                <Form.Input
                  name="password"
                  type="password"
                  placeholder="password"
                  value={state.password}
                  onChange={handleChange}
                  required
                />
                <Button
                  color="blue"
                  fluid
                  size="large"
                  type="submit"
                  className="btn"
                >
                        Login
                </Button>
              </Segment>
            </Form>
            <Message>
              New to us? <Link to="/signup">Sign Up</Link>
            </Message>
            {error ? <ErrorMessage error={error} /> : null}
          </Grid.Column>
        </Grid>
      </>
      );
}


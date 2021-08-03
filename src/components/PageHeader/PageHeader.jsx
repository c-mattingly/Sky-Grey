import React from 'react';
import {Link} from 'react-router-dom';
import "./PageHeader.css";
import { Header, Segment, Image, Icon } from 'semantic-ui-react';


export default function PageHeader({user, handleLogout}){
    return (
        <div className="Head">
        <Segment clearing>
            <Header as='h2' floated='right'>
                <Link to='' onClick={handleLogout}>Logout</Link>
            </Header>
            <Header as='h2' floated='left'>
            </Header>
        </Segment>
        </div>
    )
}
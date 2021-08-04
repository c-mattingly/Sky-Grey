import React from 'react';
import {Link} from 'react-router-dom';
import "./PageHeader.css";
import { Header, Segment, Image} from 'semantic-ui-react';


export default function PageHeader({user, handleLogout, logo}){

    // function handleMouseEnter() {
    //     setLogo()
    // }
    return (
        <Segment className="PageHeader-header" clearing>
            <Image centered size="medium" className="PageHeader-logo" src={logo} 
                 />
            
              
            <Header as='h3' floated='left'>
                <Link className="PageHeader-link" to={`/${user.username}`}>{user.username}</Link>
            </Header>
            
            <Header as='h3' floated='right'>
                <Link className="PageHeader-link" to='' onClick={handleLogout}>Logout</Link>
            </Header>
            
        </Segment>
    )
}
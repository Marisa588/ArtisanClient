import React from 'react';
import { Button } from '@material-ui/core';

function Homepage(props) {
    return (
        <div>
            <Button onClick={props.logout}>Logout</Button>
            This is the homepage 
        </div>
    )
}

export default Homepage;
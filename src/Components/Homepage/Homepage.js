import React from 'react';
import Header from './Header'
import Footer from './Footer'

import { makeStyles, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      padding: 0,
      maxWidth: '100vw'
    }
  }));

function Homepage(props) {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Header logout={props.logout}/>
            <div> 
                Marisa's component will go here
                <br/>
                content
                <br/>
                content
                <br/>
            </div>
            <Footer/>
        </Container>
    )
}

export default Homepage;
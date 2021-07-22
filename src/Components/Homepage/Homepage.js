import React from 'react';
import Header from './Header'
import Footer from './Footer'
import SubmissionForm from './SubmissionForm'
import AllProducts from './GetContent'
import UserProducts from './UserProducts'



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
                <SubmissionForm />
                {/* <UserProducts /> */}
                <br/>
                <AllProducts />
                <br/>
                content
                <br/>
            </div>
            <Footer/>
        </Container>
    )
}

export default Homepage;
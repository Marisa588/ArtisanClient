import React from 'react';
import Header from './Header'
import Footer from './Footer'
import SubmissionForm from './SubmissionForm'
import AllProducts from './GetContent'
import MyProducts from './UserProducts'



import { makeStyles, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }
  }));

function Homepage(props) {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Header logout={props.logout}/>
            <div> 
                <SubmissionForm />
                <MyProducts token={props.token}/>
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
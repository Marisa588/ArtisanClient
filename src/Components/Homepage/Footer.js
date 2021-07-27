import React from 'react';
import { Container, Typography, makeStyles } from '@material-ui/core';

  
  const useStyles = makeStyles((theme) => ({
    footer: {
      backgroundColor: theme.palette.background.paper,
      marginTop: 'auto',
      padding: theme.spacing(6, 0),
    },
  }));

function Footer() {

    const classes = useStyles();

    return (
        <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p" gutterBottom>
            Stay Rad, Buy Vinyl
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center">
              Rad Records 2021
          </Typography>
        </Container>
      </footer>
    )
}

export default Footer;
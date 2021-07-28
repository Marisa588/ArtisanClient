import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// component imports 
import Login from './Login';
import Signup from './Signup';

// styling
import { makeStyles } from '@material-ui/core/styles';
import mainImage from '../../assets/radrecordshomepage.png'
import vinylIcon from '../../assets/icons8-music-record-96.png'

// styling code for landing page
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${mainImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#522641', 
    color: 'white',
    paddingTop: '10%'
  },
  avatar: {
    margin: theme.spacing(1),

  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  bg: {
    backgroundColor: '#522641'
  }, 
  header: {
    paddingBottom: '5%'
  }
}));


function Landing(props) {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} className={classes.bg} elevation={6} square>

        <div className={classes.paper}>
          <Avatar alt="vinyl icon" src={vinylIcon} className={classes.small}></Avatar>
          <Typography className={classes.header} component="h1" variant="h5">Login</Typography>
          <Login updateToken={props.updateToken} />
        </div>

        <div className={classes.paper}>
          <Avatar alt="vinyl icon" src={vinylIcon} className={classes.small}></Avatar>
          <Typography className={classes.header} component="h1" variant="h5">Sign up</Typography>
          <Signup updateToken={props.updateToken} />

        </div>
      </Grid>
    </Grid>
  );
}

export default Landing;
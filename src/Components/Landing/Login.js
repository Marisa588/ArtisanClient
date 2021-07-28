import React, {useState} from 'react';
import { FormGroup, FormLabel, Input, Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    form: {
      color: 'white',
      padding: '1%',
      textAlign: 'center'
    },
    btn: {
        color: 'white',
        position: 'relative',
        top: '50%;',
        transform: 'translateY(-50%)',
        transform: 'translateX(80%)'

    }
  
  }));

function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:3001/user/login", {
            method: "POST",
            body: JSON.stringify({user:{username: username, password: password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
        })
    }

    const classes = useStyles();

    return (

        <div>
            <form onSubmit={handleSubmit}>
                <FormGroup>
                    <FormLabel className={classes.form} htmlFor='username'>Username</FormLabel>
                    <Input className={classes.form} onChange={(e) => setUsername(e.target.value)} name="username" value={username}/>
                </FormGroup>
                <FormGroup>
                    <FormLabel className={classes.form} htmlFor="password">Password</FormLabel>
                    <Input className={classes.form} type='password' onChange={(e) => setPassword(e.target.value)} name="password" value={password}/>
                </FormGroup>
                <Button className={classes.btn} type='submit'>Login</Button>
            </form>
        </div>
    )
}

export default Login; 
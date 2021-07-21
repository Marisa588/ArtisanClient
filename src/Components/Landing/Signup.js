import React, {useState} from 'react';
import { FormGroup, Form, FormLabel, Input, Button } from '@material-ui/core'

const Signup = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    // Validation
    const [cPassword, setCPassword] = useState('');

    const [emailValid, setEmailValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false)
    const [cPasswordValid, setCPasswordValid] = useState(false);

    
    let handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:3001/user/register", {
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

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <FormGroup>
                    <FormLabel htmlFor='username'>Username</FormLabel>
                    <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username}/>
                </FormGroup>
                <FormGroup>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password}/>
                </FormGroup>
                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    )
}

export default Signup;

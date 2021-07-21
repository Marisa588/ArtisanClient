import React, { useState } from "react";
import { FormGroup, Form, FormLabel, Input, Button } from "@material-ui/core";

const Signup = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Validation
  const [cPassword, setCPassword] = useState("");

  const [userValid, setUserValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [cPasswordValid, setCPasswordValid] = useState(false);

  // Begin Css
  const formWrapper = {
    marginInline: "1em",
    width: "24em",
    minWidth: "12em",
    background: theme === "Dark" ? "rgba(0,0,0,.5)" : "rgba(255,255,255, .6)",
    borderRadius: "1em",
    padding: "2em",
    backdropFilter: "blur(15px)",
    filter: "drop-shadow(5px 5px 5px rgba(0,0,0,.3))",
    color: theme === "Dark" ? "white" : "black",
  };

  const formFeedBackStyle = {
    fontSize: "1.2em",
    fontWeight: "bold",
    userSelect: "none",
  };

  const inputStyle = {
    textAlign: "center",
    color: theme === "Dark" ? "white" : "black",
  };

  // End Css

  let handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3001/user/register", {
      method: "POST",
      body: JSON.stringify({
        user: { username: username, password: password },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        props.updateToken(data.sessionToken);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel htmlFor="username">Username</FormLabel>
          <Input
            required
            type='username'
            id='username'
            onChange={(e) => {
                setUsername(e.target.value)
                if (
                    e.target.value.includes("@")
                ) {
                    setUserNameValid(true);
                } else {
                    setUserNameValid(false);
                }


            }}
            name="username"
            value={username}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            onChange={(e) => {
                setPassword(e.target.value)
                if (
                    e.target.value.includes("@")
                ) {
                    setPasswordValid(true);
                } else {
                    setPasswordValid(false);
                }
            
            
            }}
            name="password"
            value={password}
          />
        </FormGroup>
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default Signup;

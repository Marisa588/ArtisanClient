import React, {useState, useEffect } from ("react");
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const WorkoutCreate = (props) => {
    const [description, setDescription] = useState('');
    const [definition, setDefinition] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/record/', {
            method: "POST",
            body: JSON.stringify({ log: {description: description, defintion: definition, result: result}}),
            headers: new Headers({
                'Content-Type':'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then((res) => res.json())
            .then((logData) =>{
                console.log(logData);
                setDescription('');
                setDefinition('');
                setResult('');
                props.fetchWorkouts();
            })
    };

    return (
        <>
            <h3>Log a Record</h3>
            <Form>
                
            </Form>
        </>
    )
}
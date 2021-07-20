import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap'

const RecordIndex = (props) => {
    const [records, setRecords] = useState([]);

    const fetchRecords = () => {
        fetch('http://localhost:3000/log', {
            method: "GET",
            headers: new Headers({
                'Content-Type':'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then((res) => res.json())
            .then((logData) => {
                setRecords(logData);
            })
    };

    useEffect(() => {
        fetchRecords();
    }, []);

    return(
        <Container>
            <Row>
                <col md='3'>
                    {/* The create component will go here */}
                </col>
                <col md='9'>
                    <h2>Log a record to see a table, this wil lbe added in later pages.</h2>
                </col>
            </Row>
        </Container>
    )
};

export default RecordIndex;
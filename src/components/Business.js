import React from 'react'
import { Container } from '@material-ui/core';
import Map from './Map'

const Business = (props) => {
    const id = props.match.params.id
    const business = props.business.find(c => c.id == id)

    return (
        <Container maxWidth="sm" className="business-container">
            <div className="business-paper">
                <h1>{business.Name}</h1>
                <h3>{business.Address}</h3>
                <h3>{business.Hours}</h3>
                <p>{business.Description}</p>
                <Map></Map>
            </div>
        </Container>
    )
}

export default Business;
import React from 'react'
import { Container } from '@material-ui/core';
import Map from './Map'

const Business = (props) => {
    const id = props.match.params.id
    const business = props.business.find(c => c.id == id)

    return (
        <Container maxWidth="sm" className="business-container">
            <div className="business-paper">
                <h2>{business.Name}</h2>
                <h4>{business.Address}</h4>
                <h4>{business.Hours}</h4>
                <p>{business.Description}</p>
                <Map></Map>

            </div>
        </Container>
    )
}

export default Business;
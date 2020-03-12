import React from 'react'
import { Container } from '@material-ui/core';
<<<<<<< HEAD
import GoogleMapReact from 'google-map-react';
// import Map from './Map'

const AnyReactComponent = ({ text }) => <div>{text}</div>


=======
import Map from './Map'
>>>>>>> d6a9c9b3c96ccbbc3b2cbbdd716216d1a902bfce

const Business = (props) => {
    const id = props.match.params.id
    const business = props.business.find(c => c.id == id)
<<<<<<< HEAD

    const defaultProps = {
        center: {
            lat: Number(business.Latitude),
            lng: Number(business.Longitude),
        },
        zoom: 11
    }

    return (
        <Container maxWidth="sm" className="business-container">
                <h2>{business.Name}</h2>
                <h4>{business.Address}</h4>
                <h4>{business.Hours}</h4>
                <p>{business.Description}</p>
            <Container style={{ height: "400px", width: "450px"}}>
                <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_KEY }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                >
                    <AnyReactComponent lat={business.Latitude} lng={business.Longitude} text={business.Name} />
                </GoogleMapReact>

            </Container>

=======

    return (
        <Container maxWidth="sm" className="business-container">
            <div className="business-paper">
                <h1>{business.Name}</h1>
                <h3>{business.Address}</h3>
                <h3>{business.Hours}</h3>
                <p>{business.Description}</p>
                <Map></Map>
            </div>
>>>>>>> d6a9c9b3c96ccbbc3b2cbbdd716216d1a902bfce
        </Container>
    )
}

export default Business
<<<<<<< HEAD
// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';
=======
import React from 'react'
>>>>>>> d6a9c9b3c96ccbbc3b2cbbdd716216d1a902bfce

import { Container } from "@material-ui/core/";
import GoogleMapReact from "google-map-react";
import LocationOnIcon from '@material-ui/icons/LocationOn';

// const REACT_APP_GOOGLE_MAP_KEY = process.env.REACT_APP_GOOGLE_MAP_KEY


<<<<<<< HEAD
// const Pointer = () => {
  
//   return(

// <div style={{display:'flex', alignItems:'center', justifyContent:'center', width: '20px', height:'20px', borderRadius:'100%', background:'green'}}>
// <div style={{width: '5px',height:'5px', borderRadius:'100%', background: 'black' }}></div>
// </div>
// )
//     }

// class Map extends Component {
//   static defaultProps = {
//     center: {
//       lat:30.267153,
//       lng:-97.743057
//     },
//     zoom: 11
//   };

//   render() {
//     return (
//       <div style={{ height: '400px', width: '400px' }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: REACT_APP_GOOGLE_MAP_KEY}}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//       <Pointer
//         lat= {30.267153}
//         lng= {-97.743057}
//       />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }
 
// export default Map;
=======

const Map = (props) => {

    const defaultProps = {
        center: {
            lat: props.lat,
            lng: props.lng,
        },
        zoom: 11
    };

    return (
        <Container style={{ height: '400px', width: '400px',margin: 'auto', padding: '40px' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: REACT_APP_GOOGLE_MAP_KEY }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                yesIWantToUseGoogleMapApiInternals

            >
                <LocationOnIcon
                    lat={props.lat}
                    lng={props.lng}
                />

            </GoogleMapReact>
        </Container>
    )
}

export default Map; 



>>>>>>> d6a9c9b3c96ccbbc3b2cbbdd716216d1a902bfce

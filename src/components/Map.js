// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';


// const REACT_APP_GOOGLE_MAP_KEY = process.env.REACT_APP_GOOGLE_MAP_KEY


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
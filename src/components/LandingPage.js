import React from "react";
import GoogleMapReact from "google-map-react";
import "./LandingPage.css";

const AnyReactComponent = ({ text }) => (
  <div className="map-marker">{text}</div>
);

const LandingPage = () => {
  const center = {
    lat: 40.7128, // Latitude of your desired center
    lng: -74.006, // Longitude of your desired center
  };

  const zoom = 11; // Zoom level

  return (
    <div className="landing-page">
      <h1>Welcome to Our Landing Page</h1>
      <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyARVZnHOEfnLogWxs9tKH-qa78pNjxmAE4" }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <AnyReactComponent
            lat={center.lat}
            lng={center.lng}
            text="Your Marker Text"
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default LandingPage;

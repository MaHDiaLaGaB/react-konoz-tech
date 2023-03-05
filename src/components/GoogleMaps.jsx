import GoogleMapReact from 'google-map-react';
import React from 'react';

const GoogleMap = () => {
    return (
        <div style={{ height: '500px', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'YOUR_API_KEY_HERE' }}
                defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
                defaultZoom={12}
            />
        </div>
    );
};

export default GoogleMap;

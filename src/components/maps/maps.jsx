import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import  './maps.css';


export function Maps(){
    
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDcU4JYHca_joA3qsrFoTaeT_B3bRKSmV4",
    })

    const position = {
        lat: -22.90843016194224,
        lng: -47.057925625545195,
    }
    
    return(
        <div className="map">
            {isLoaded ? (
                <GoogleMap
                    mapContainerStyle={{width: "100%", height: "100%"}}
                    center={ position }
                    zoom={16}                   
                >
                    <Marker position={ position } options={{
                        label: {
                            text: "Dental Dev",
                            color: "#800322",
                            fontSize: "17px",
                            fontWeight: "bold",
                            className: "label",                            
                        }
                    }} />
                </GoogleMap>
            ) : <></>}
        </div>
    )
}

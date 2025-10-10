'use client'

import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ lat, lng, text } : {lat:number, lng:number, text: string}) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 28.606495316763578, 
      lng: 77.43204555958981
    },
    zoom: 50
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '70vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={28.606495316763578}
          lng={77.43204555958981}
          text="Our Office"
        />
      </GoogleMapReact>
    </div>
  );
}



















{/* <div id="hs-change-city-leaflet-wrapper">
  <div className="mb-4 inline-flex gap-x-1">
    <nav className="flex gap-x-1 --prevent-on-load-init" role="tablist">
      <button type="button" className="hs-tab-active:bg-gray-100 hs-tab-active:hover:bg-gray-100 hs-tab-active:focus:bg-gray-100 hs-tab-active:text-gray-800 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm text-gray-500 rounded-full hover:text-gray-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:text-gray-800 active" role="tab" aria-selected="true" data-hs-tab="London">
        London
      </button>
      <button type="button" className="hs-tab-active:bg-gray-100 hs-tab-active:hover:bg-gray-100 hs-tab-active:focus:bg-gray-100 hs-tab-active:text-gray-800 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm text-gray-500 rounded-full hover:text-gray-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:text-gray-800" role="tab" aria-selected="false" data-hs-tab="Birmingham">
        Birmingham
      </button>
      <button type="button" className="hs-tab-active:bg-gray-100 hs-tab-active:hover:bg-gray-100 hs-tab-active:focus:bg-gray-100 hs-tab-active:text-gray-800 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm text-gray-500 rounded-full hover:text-gray-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:text-gray-800" role="tab" aria-selected="false" data-hs-tab="Leeds">
        Leeds
      </button>
    </nav>
  </div>

  <div id="hs-change-city-leaflet" className="h-100 hs-leaflet z-10"></div>
</div> */}
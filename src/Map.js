import React, { useRef, useEffect } from 'react';

import mapboxgl from '!mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1Ijoic3RvcmNrcGhvdG9zIiwiYSI6ImNrODNvYmc0czAxazMzbW1yZDdyeWZoNjAifQ.PiAIkQrVS4a5c7dBgcElhQ';

const Map = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-122.4713, 47.7237],
      zoom: 9
  });


  map.on("load", function () {
    map.loadImage(
      "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
      function (error) {
        if (error) throw error;
      }
    );
  });

function getSightings() {
  fetch('https://acartia.io/api/v1/sightings/current')
    .then(response => response.json())
    .then(data => {
      data.forEach(item => {
        new mapboxgl.Marker()
        .setLngLat([item.longitude, item.latitude])
        .setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(`<h3>${item.ssemmi_id}</h3><p>${item.type}</p>`))
        .addTo(map);
      });

  })
}
getSightings()

map.addControl(new mapboxgl.NavigationControl(), "top-right");
}, []);

  return (
  <div ref={mapContainerRef} className="map-container" />
);

}

export default Map;

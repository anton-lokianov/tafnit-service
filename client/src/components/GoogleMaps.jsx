import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";
import Input from "./ui/Input";
import Button from "./ui/Button";
import { useState } from "react";

const GoogleMaps = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API,
  });
  const [map, setMap] = useState(/** @type google.maps.googleMaps*/ null);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex-grow p-1 relative">
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        zoom={7}
        center={{ lat: 31.046051, lng: 34.851612 }}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
        onLoad={(map) => setMap(map)}
      ></GoogleMap>
      <div className="absolute z-10 top-0 left-1/2 transform -translate-x-1/2 mt-4"></div>
    </div>
  );
};

export default GoogleMaps;

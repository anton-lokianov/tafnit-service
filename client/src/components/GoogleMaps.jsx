import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";

const GoogleMaps = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API,
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex-grow p-3">
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        zoom={7}
        center={{ lat: 31.046051, lng: 34.851612 }}
      ></GoogleMap>
    </div>
  );
};

export default GoogleMaps;

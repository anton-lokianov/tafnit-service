import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";

const GoogleMaps = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API,
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <div className="h-screen">
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100vh" }}
        zoom={8}
        center={{ lat: -34.397, lng: 150.644 }}></GoogleMap>
    </div>
  );
};

export default GoogleMaps;

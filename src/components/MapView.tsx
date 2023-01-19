import mapboxgl from "mapbox-gl";
import { useContext, useLayoutEffect, useRef } from "react";
import { MapContext } from "../context/map/MapContext";
import { PlacesContext } from "../context/places/PlacesContext";
import Loading from "./Loading";

const MapView = () => {
  const { isLoading, userLocation } = useContext(PlacesContext);
  const { setMap } = useContext(MapContext)
  const mapDiv = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!isLoading) {
      const map = new mapboxgl.Map({
        container: mapDiv.current!, // container ID
        style: "mapbox://styles/mapbox/dark-v10", // style URL
        center: userLocation, // starting position [lng, lat]
        zoom: 14, // starting zoom
      });
      setMap(map)
    }
  }, [isLoading]);

  if (isLoading) {
    return (<Loading />);
  }

  return (
    <div
      ref={mapDiv}
      style={{
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      {userLocation?.join(",")}
    </div>
  );
};

export default MapView;

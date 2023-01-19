import { useContext, useState } from "react";
import { MapContext } from "../context/map/MapContext";
import { PlacesContext } from "../context/places/PlacesContext";
import { Feature } from "../interfaces/places";
import LoadingPlaces from "./LoadingPlaces";

const SearchResults = () => {
  const { places, isLoadingPlaces, userLocation } = useContext(PlacesContext);
  const { map, getRoutesBetweenPoints } = useContext(MapContext);
  const [activeId, setActiveId] = useState("");

  const onPlaceClick = (place: Feature) => {
    const [lng, lat] = place.center;
    setActiveId(place.id);
    map?.flyTo({
      zoom: 14,
      center: [lng, lat],
    });
  };

  const getRoute = (place: Feature) => {
    if(!userLocation) return;
    const [lng,lat] = place.center
    getRoutesBetweenPoints(userLocation,[lng,lat])
  }

  if (isLoadingPlaces) {
    return <LoadingPlaces />;
  }

  if (places.length === 0) {
    return <></>;
  }

  return (
    <ul className="list-group mt-3">
      {places.map((place) => (
        <li
          onClick={() => onPlaceClick(place)}
          key={place.id}
          className={`list-group-item list-group-item-action pointer ${
            activeId === place.id ? "active" : ""
          }`}
        >
          <h6>{place.text_es}</h6>
          <p style={{ fontSize: "12px" }}>{place.place_name}</p>
          <button
            onClick={() => getRoute(place)}
            className={`btn btn-sm ${
              activeId === place.id
                ? "btn-outline-light"
                : "btn-outline-primary"
            } `}
          >
            Direcciones
          </button>
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;

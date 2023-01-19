import { Feature } from './../../interfaces/places';
import { createContext } from "react";

export interface PlacesContextProps {
    isLoading: boolean;
    userLocation?: [number,number];
    isLoadingPlaces: boolean;
    places: Feature[];
    
    // Methods
    searchPlacesByTerm: (query: string) => Promise<Feature[]>
}



export const PlacesContext = createContext<PlacesContextProps>({} as PlacesContextProps);
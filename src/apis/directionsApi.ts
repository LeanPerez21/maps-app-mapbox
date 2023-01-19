
import axios from "axios";

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoibGVhbngyMSIsImEiOiJjbGN0c3g3b2sxMnIyM3ZucXY0eWtobDJ5In0.C97fvPLJlDn3avvvHYUj2w'
    }
})

export default directionsApi;
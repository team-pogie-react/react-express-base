import axios from 'axios';

const ROOT_URL = `http://hydra-staging.usautoparts.com/v1.0/Catalog2/?op=getCategories&data={%22catalogType%22:%22Auto%22,%22catalogSource%22:%22Endeca%22,%22site%22:%22carparts.com%22,%22type%22:%22top%22,%22rank%22:%22msv_30%20desc%22,%22useSelectedVehicle%22:1,%22phoenix%22:1}`;

export const FETCH_NAVLIST= 'FETCH_NAVLIST';


export default function fetchNav() {
    const request = axios.get(ROOT_URL);
    console.log(request);
    return {
        type: FETCH_NAVLIST,
        payload: request

    }
}
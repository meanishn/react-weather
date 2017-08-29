import { FETCH_WEATHER } from '../actions/index';

export default function (state=[], action ) {
    switch (action.type) {
        case FETCH_WEATHER:
            // add weather data to the state
            // do not mutate original state
            return [action.payload.data, ...state];
            break;
    }
    return state;
}
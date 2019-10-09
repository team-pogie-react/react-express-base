import { FETCH_NAVLIST } from '../../actions/widgets/nav';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_NAVLIST:
            // return state.concat([action.payload.data]);
            return [ action.payload.data, ...state ];

    }

    return state;
}
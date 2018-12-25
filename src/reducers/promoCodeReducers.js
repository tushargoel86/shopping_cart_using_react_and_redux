//evaluate the action like fetching and updating posts
//action are called as types
import { PROMO_CODE, SAVINGS } from '../actions/types'

const initialState = {
    value: '',
    open: false,
    savings: ''
}

export default function(state = initialState, action) {
    switch (action.type) {
        case PROMO_CODE:
            return {
                ...state,
                value: action.payload
            };
        case SAVINGS:
            return {
                ...state,
                savings: action.payload
            };
        default:
            return state;
    }
}

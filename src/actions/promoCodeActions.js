import { PROMO_CODE, SAVINGS } from "./types";


//each action should have separate export function
export function applyPromocode(e) {
    return function (dispatch) {
         return dispatch({
                type: PROMO_CODE,
                payload: e.target.value
            });
    };
};

// export const savings = () => dispatch => {
//      dispatch({
//         type: SAVINGS,
//         payload: -100
//      });
// };

export function savings() {
    return function(dispatch) {
        return dispatch({
            type: SAVINGS,
            payload: -100
         });
    }
};
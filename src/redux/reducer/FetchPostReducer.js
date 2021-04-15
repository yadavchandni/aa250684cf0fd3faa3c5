import { FETCH_POST } from "../action/actionType";

const initialState = {
posts:[],
}


export const FetchPostReducer= (state = initialState,action) => {

    const { type, payload }=action;
    switch (type) {

    case FETCH_POST:
        return {
             ...state, 
            posts:state.posts.concat(payload),
             }

    default:
        return state
    }
}

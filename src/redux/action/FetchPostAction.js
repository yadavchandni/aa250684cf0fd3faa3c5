import { getAllFetchPostServices } from "../../services/getAllFetchPostServices";
import { FETCH_POST } from "./actionType";



export const FetchPostAction = (posts) => {
    //dispatch file 
  return async (dispatch) => {
    const details = await getAllFetchPostServices(posts);
    dispatch({
      type: FETCH_POST,
      payload: details.data.hits,
    });
  };
};

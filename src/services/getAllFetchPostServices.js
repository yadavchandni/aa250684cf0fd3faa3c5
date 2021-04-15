import Axios from "axios"


export const getAllFetchPostServices= async(posts)=>{
    //get data through on this Api :
    return (
        Axios.get(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${posts}`)
    )
}
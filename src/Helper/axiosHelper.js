import axios from "axios"
const apiEp = `http://www.omdbapi.com/?apikey=1088c25d&t=`
export const fetchData =async (str) => {
    try{
        const response = await axios(apiEp + str)
        return response.data

    }catch(error) {
        console.log(error)
        return error.message
    }
}
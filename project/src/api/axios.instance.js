import axios from "axios";

export const request = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3",
    params: {
        // key: "AIzaSyCMfEe89fFRC2o-qeLvvIdCACZ-rCf8dHA",
        key: "AIzaSyCb0HqesfzGoX-AKA2CyyqHa_JiVYxhh_4",
    }
})
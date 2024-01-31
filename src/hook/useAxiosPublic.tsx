import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "http://localhost:4000"
})
// https://house-swift-web-creations-server.vercel.app

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;

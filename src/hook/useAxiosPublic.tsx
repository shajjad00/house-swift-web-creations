import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://house-swift-web-creations-server.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;

import axios from "axios";
const axiosPublic = axios.create({
  baseURL: "https://house-swift-web-creations-server-sandy.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};
export default useAxiosPublic;

//https://house-swift-web-creations-server.vercel.app

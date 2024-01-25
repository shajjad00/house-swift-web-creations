import axios from 'axios';

const axiosSecure = axios.create({
  baseURL: 'https://a-12-homez-server.vercel.app'
})

export default function useAxiosSecure() {
  return axiosSecure;
}

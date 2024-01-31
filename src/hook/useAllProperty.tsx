import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useAllProperty = () => {
  const axiosPublic = useAxiosPublic();
  const {
    refetch,
    data: allProperty = [],
    isPending: loading,
  } = useQuery({
    queryKey: ["allProperty"],
    queryFn: async () => {
      const res = await axiosPublic.get("/addProperty");
      return res.data; // This should be wrapped in a Promise
    },
  });
  return [allProperty, refetch, loading];
};

export default useAllProperty;

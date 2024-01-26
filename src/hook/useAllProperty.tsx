import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useAllProperty = () => {
  //   const axiosSecure = UseAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const {
    refetch,
    data: allProperty = [],
    isPending: loading,
  } = useQuery({
    queryKey: ["allProperty"],
    queryFn: async () => {
      const res = await axiosPublic.get("/addProperty");
      return res.data;
    },
  });
  return [allProperty, refetch, loading];
};

export default useAllProperty;
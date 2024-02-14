import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useReviews = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: allReviews = [],
    refetch,
    isPending: loading,
  } = useQuery({
    queryKey: ["allRewiews"],
    queryFn: async () => {
      const res = await axiosPublic.get("/allRewiews");
      return res.data;
    },
  });
  return [allReviews, refetch, loading];
};

export default useReviews;

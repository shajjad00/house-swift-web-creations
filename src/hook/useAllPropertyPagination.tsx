import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllPropertyPagination = (
  currentPage: number,
  itemsPerPage: number
) => {
  const axiosPublic = useAxiosPublic();
  console.log(currentPage);
  const {
    refetch,
    data: allPropertyPagination = [],
    isPending: loading,
  } = useQuery({
    queryKey: ["allPropertyPagination", currentPage, itemsPerPage],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/addProperty?page=${currentPage}&size=${itemsPerPage}`
      );
      return res.data; // This should be wrapped in a Promise
    },
  });
  return [allPropertyPagination, refetch, loading];
};

export default useAllPropertyPagination;

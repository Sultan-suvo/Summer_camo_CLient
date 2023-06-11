
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useSelectedClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();

  const { data: selectedClass = [], refetch } = useQuery(
    ["selectedclass", user?.email],
    async () => {
      const res = await axiosSecure(`/selectedclass?email=${user?.email}`);
      return res.data;
    }
  );

  return [selectedClass, refetch];
};

export default useSelectedClass;
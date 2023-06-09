import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useInstructor = () => {
    const {user} = useAuth()
    const [axiosSecure] = useAxiosSecure();
    const {data : isInstructor , isLoading : isInstructorLoading} = useQuery({
        queryKey:['isInstructor', user?.email],
        queryFn:async()=>{
            const res = await axiosSecure.get(`/users/isInstructor/${user?.email}`)
            return res.data.isInstructor
        }
    })
    return [isInstructor , isInstructorLoading]
};

export default useInstructor;
import { useQuery } from "@tanstack/react-query";
import useAxiousPrivate from "./useAxiousPrivate";


const useLoadAllUsers = () => {
    const axiousPrivate = useAxiousPrivate();
    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            // console.log("load all users working");
            const res = await axiousPrivate.get("/users")
            return res.data;
        }
    })
    return [users, refetch]
};

export default useLoadAllUsers;
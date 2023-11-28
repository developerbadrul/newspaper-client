import { useQuery } from "@tanstack/react-query";
import useAxiousPrivate from "./useAxiousPrivate";


const useLoadAllUsers = () => {
    const axiousPrivate = useAxiousPrivate();
    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiousPrivate.get("/users", {
                headers:{
                    authorization: `Bearer ${localStorage.getItem("access-token")}`
                }
            })
            return res.data;
        }
    })
    return [users, refetch]
};

export default useLoadAllUsers;
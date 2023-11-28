import { useQuery } from "@tanstack/react-query";
import useAxiousPrivate from "./useAxiousPrivate";
import useAuth from "./useAuth";

const useLoadAdmin = () => {
    const { currentUser, loading } = useAuth();
    const axiousPrivate = useAxiousPrivate();
    console.log(currentUser, "load admin");
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [currentUser.email, "isAdmin"],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiousPrivate.get(`/users/admin/${currentUser?.email}`)
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useLoadAdmin;
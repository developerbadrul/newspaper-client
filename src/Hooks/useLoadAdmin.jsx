import { useQuery } from "@tanstack/react-query";
import useAxiousPrivate from "./useAxiousPrivate";
// import useAuth from "./useAuth";
import { useContext } from "react";
import { AuthContex } from "../Providers/AuthProvider";

const useLoadAdmin = () => {
    const { currentUser, loading } = useContext(AuthContex)
    const axiousPrivate = useAxiousPrivate();
    // console.log(currentUser, "load admin");
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [currentUser?.email, "isAdmin"],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiousPrivate.get(`/users/admin/${currentUser?.email}`);
            // console.log(res.data, "check admin in useAdmin");
            return res?.data?.admin; // Adjust this line to access the 'admin' property
        }
    });
    return [isAdmin, isAdminLoading]
};

export default useLoadAdmin;
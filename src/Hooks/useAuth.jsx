import { useContext } from "react";
import { AuthContex } from "../Providers/AuthProvider";

const useAuth = () => {
    const authHook = useContext(AuthContex)
    // console.log(authHook);
    return authHook;
};

export default useAuth;
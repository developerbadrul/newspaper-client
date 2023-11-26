/* eslint-disable react/prop-types */
import { createContext } from "react";

export const AuthContex = createContext(null)

const AuthProvider = ({ children }) => {

    const fakeInfo = { name: "Alam" }
    const fakeInfo2 = { name: "Badrul" }

    const value = {
        fakeInfo,
        fakeInfo2
    }
    return (
        <AuthContex.Provider value={value}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;
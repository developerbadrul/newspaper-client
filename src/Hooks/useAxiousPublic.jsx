import axios from "axios";

const axiousPublic = axios.create({
    // baseURL: 'http://localhost:5000',
    baseURL: 'https://newspaper-server-eta.vercel.app',
})


const useAxiousPublic = () => {

    axiousPublic.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status;
        console.log('status error in the interceptor', status);
        // for 401 or 403 logout the user and move the user to the login
        // if (status === 401 || status === 403) {
        //     await logOut();
        //     navigate('/login');
        // }
        return Promise.reject(error);
    })
    return axiousPublic;
};

export default useAxiousPublic;
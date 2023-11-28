import axios from "axios";

const axiousPrivate = axios.create({
    baseURL: 'http://localhost:5000'
})


const useAxiousPrivate = () => {
    axiousPrivate.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        // console.log('request stopped by interceptors', token)
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    return axiousPrivate;
};

export default useAxiousPrivate;
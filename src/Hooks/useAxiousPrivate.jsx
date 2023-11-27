import axios from "axios";

const axiousPrivate = axios.create({
    baseURL: 'http://localhost:5000'
})


const useAxiousPrivate = () => {
    return axiousPrivate;
};

export default useAxiousPrivate;
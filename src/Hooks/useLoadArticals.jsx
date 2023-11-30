import { useQuery } from "@tanstack/react-query";
import useAxiousPublic from "./useAxiousPublic";

const useLoadArticals = () => {
    const axiousPublic = useAxiousPublic();
    const { data: articles, } = useQuery({
        queryKey: ["articals"],
        queryFn: async () => {
            const res = await axiousPublic.get("/allartical");
            console.log(res.data, "All Artical");
            return res?.data; // Adjust this line to access the 'admin' property
        }
    });
    return [articles]
};

export default useLoadArticals;



import { Button } from "flowbite-react";
import Marquee from "react-fast-marquee";
import useLoadArticals from "../../Hooks/useLoadArticals";
import { FaStar } from "react-icons/fa";

const TrandingNews = () => {
    const [articles] = useLoadArticals();

    return (
        <div className="flex p-2">
            <Button color="success" >TrandingNews</Button>
            <Marquee>
                {articles?.map((article) => (
                    <div key={article?._id} className="flex">
                        <span className="mx-3"><FaStar /></span>
                        <p className="mx-4 text-green-600 font-semibold">{article?.title} </p>
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default TrandingNews;

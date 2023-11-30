import { Button } from "flowbite-react";
import Marquee from "react-fast-marquee";
import useLoadArticals from "../../Hooks/useLoadArticals";

const TrandingNews = () => {
    const [articles] = useLoadArticals();

    return (
        <div className="flex">
            <Button color="success" >TrandingNews</Button>
            <Marquee>
                {articles?.map((article) => (
                    <div key={article?._id}>
                        <p className="mx-4 text-green-600 font-semibold">{article?.title}</p>
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default TrandingNews;

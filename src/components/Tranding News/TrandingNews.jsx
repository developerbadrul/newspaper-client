import { Button } from "flowbite-react";
import Marquee from "react-fast-marquee";
const TrandingNews = () => {
    return (
        <div className="flex">
            <Button color="success">Success</Button>
            <Marquee>
                I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    );
};

export default TrandingNews;
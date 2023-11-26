import Lottie from "lottie-react";
import errorPage from "../../assets/errorpage.json"
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { IoIosHome } from "react-icons/io";
const ErrorPage = () => {
    return (
        <div className="md:w-11/12 mx-auto">
            <Link to="/"><Button color="failure" className="mx-7 font-bold mt-3"> <span className="mr-2 text-xl"><IoIosHome /></span> Go Home</Button>
            </Link>
            <Lottie animationData={errorPage} />
        </div>
    );
};

export default ErrorPage;
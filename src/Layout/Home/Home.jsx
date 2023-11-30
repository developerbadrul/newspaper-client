import Container from "../../components/Container/Container";
import CountUsers from "../../components/CountUsers/CountUsers";
import TrandingNews from "../../components/Tranding News/TrandingNews";
import AllPublisher from "../AllPublisher/AllPublisher";
import Plans from "../Plans/Plans";
const Home = () => {
    return (
        <div>
            <Container>
                <TrandingNews></TrandingNews>
                <div className="grid grid-cols-1 md:grid-cols-2 space-x-5">
                    <AllPublisher></AllPublisher>
                    <CountUsers></CountUsers>
                </div>
                <Plans></Plans>
            </Container>
        </div>
    );
};

export default Home;
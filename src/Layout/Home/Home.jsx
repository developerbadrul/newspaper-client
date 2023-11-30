import Container from "../../components/Container/Container";
import CountUsers from "../../components/CountUsers/CountUsers";
import TrandingNews from "../../components/Tranding News/TrandingNews";
import AllPublisher from "../AllPublisher/AllPublisher";
import Plans from "../Plans/Plans";
const Home = () => {
    return (
        <div>
            <Container>
                this is home layout
                <TrandingNews></TrandingNews>
                <AllPublisher></AllPublisher>
                <CountUsers></CountUsers>
                <Plans></Plans>
            </Container>
        </div>
    );
};

export default Home;
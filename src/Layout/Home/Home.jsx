import Container from "../../components/Container/Container";
import CountUsers from "../../components/CountUsers/CountUsers";
import TrandingNews from "../../components/Tranding News/TrandingNews";
import AllPublisher from "../AllPublisher/AllPublisher";
const Home = () => {
    return (
        <div>
            <Container>
                this is home layout
                <TrandingNews></TrandingNews>
                <AllPublisher></AllPublisher>
                <CountUsers></CountUsers>
            </Container>
        </div>
    );
};

export default Home;
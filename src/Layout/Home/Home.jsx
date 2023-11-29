import Container from "../../components/Container/Container";
import TrandingNews from "../../components/Tranding News/TrandingNews";
import AllPublisher from "../AllPublisher/AllPublisher";
const Home = () => {
    return (
        <div>
            <Container>
                this is home layout
                <TrandingNews></TrandingNews>
                <AllPublisher></AllPublisher>
            </Container>
        </div>
    );
};

export default Home;
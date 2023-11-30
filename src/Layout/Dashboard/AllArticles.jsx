import useLoadArticals from "../../Hooks/useLoadArticals";
import Container from "../../components/Container/Container";
import SingleArticle from "../../components/SingleArticle/SingleArticle";

const AllArticles = () => {
    const [articles] = useLoadArticals();
    console.log(articles);
    return (
        <Container>
            <h2 className="text-center font-bold my-4 text-cyan-500 text-3xl underline">All Articles</h2>
            <div className="grid grid-cols-3 gap-6">
                {
                    articles.map(article => <SingleArticle key={article._id} article={article}></SingleArticle>)
                }
            </div>
        </Container>
    );
};

export default AllArticles;
import { useLoaderData } from "react-router-dom";
import Cards from "../../Components/Cards/Cards";
import Banner from "../../Components/Header/Banner/Banner";


const Home = () => {

    const cards = useLoaderData()


    return (
        <div>
            <div className="banner">
                <Banner></Banner>
            </div>
            <Cards cards={cards}></Cards>
        </div>
    );
};

export default Home;
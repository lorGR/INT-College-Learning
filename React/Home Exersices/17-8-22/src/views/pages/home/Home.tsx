import Catalog from "./Catalog";
import Hero from "./Hero";

const Home = () => {
    return (
        <div className="home">
            <Hero />
            <h1>Catalog</h1>
            <Catalog />
        </div>
    );
}

export default Home;
import Carrousel from "../pages/Components/Carousel";
import Card from "../pages/Components/Card";
import "./Home.css";


const Home = () => {
    return (
        <div>
            <Carrousel />


            <h1 className="title">
                Organize seus filmes preferidos aqui
            </h1>

            <Card />
            <Card />

        </div>
    )
  };
  
  export default Home;
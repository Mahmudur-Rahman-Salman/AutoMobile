import { Helmet } from "react-helmet-async";
import BestCars from "../../components/BestCars/BestCars";
import Hero from "../../components/Hero/Hero";
import Testimonials from "../../components/Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>AutoMobile | Home</title>
            </Helmet>
            <Hero></Hero>
            <BestCars></BestCars>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;
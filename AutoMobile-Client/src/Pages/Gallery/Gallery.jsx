import { Helmet } from "react-helmet-async";
import Cover from "../../components/Cover/Cover";
import coverPic from "../../assets/Images/cars/porshe_cover.jpg"; 

const Gallery = () => {
    return (
        <>
        <Helmet>
            <title>AutoMobile | Gallery</title>
        </Helmet>
        <Cover img={coverPic}></Cover>
            
        </>
    );
};

export default Gallery;
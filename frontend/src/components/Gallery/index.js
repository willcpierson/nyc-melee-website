import styles from "./Gallery.module.css";
import friendsImage from "../../pictures/Friends.jpg";
import jojoAkloImage from "../../pictures/JojoAklo.jpg";
import stevenCrueltyImage from "../../pictures/StevenCruelty.jpg";
import SimpleSlider from "../SimpleSlider";

const Gallery = () => { 
    return (
        <div id={styles.galleryBody}>
            <SimpleSlider />
        </div>
    );
};

export default Gallery;
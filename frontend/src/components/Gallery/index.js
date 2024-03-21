import styles from "./Gallery.module.css";
import friendsImage from "../../pictures/Friends.jpg"
import jojoAkloImage from "../../pictures/JojoAklo.jpg"
import stevenCrueltyImage from "../../pictures/StevenCruelty.jpg"


const Gallery = () => { 
    return (
        <div id={styles.galleryBody}>
            <img id={styles.friendsImage} src={friendsImage} alt="" />
            <img id={styles.jojoAkloImage} src={jojoAkloImage} alt="" />
            <img id={styles.stevenCrueltyImage} src={stevenCrueltyImage} alt="" />
        </div>
    );
};

export default Gallery;
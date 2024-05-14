import styles from "./Gallery.module.css";
import SimpleSlider from "../SimpleSlider";

const Gallery = () => { 
    return (
        <div id={styles.galleryBody}>
            <SimpleSlider />
        </div>
    );
};

export default Gallery;
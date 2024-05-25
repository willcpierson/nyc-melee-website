import styles from "./FrontPage.module.css";
import Gallery from "../Gallery";

const FrontPage = () => {


    return (
        <div id={styles.frontPageBody}> 
            <Gallery /> 
        </div>
    );
};

export default FrontPage;
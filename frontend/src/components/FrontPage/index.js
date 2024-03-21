import styles from "./FrontPage.module.css";
import NavBar from "../NavBar";
import Gallery from "../Gallery";


const FrontPage = () => {


    return (
        <div> 
            <NavBar />
            <h1>Hello from FrontPage!</h1>
            <Gallery /> 
        </div>
    );
};

export default FrontPage;
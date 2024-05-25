import styles from "./FrontPage.module.css";
import NavBar from "../NavBar";
import Gallery from "../Gallery";
import TournamentBox from "../TournamentBox";

const FrontPage = () => {


    return (
        <div id={styles.frontPageBody}> 
            {/* <h1 id={styles.intro}>The home for all things NYC Melee related!</h1>
            <h2 id={styles.upcomingEventsText}>Check out our upcoming events!</h2> */}
            <Gallery /> 
            {/* <TournamentBox /> */}
        </div>
    );
};

export default FrontPage;
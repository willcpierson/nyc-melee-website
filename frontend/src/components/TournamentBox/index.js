import styles from "./TournamentBox.module.css";
import NightclubLogo from "../../pictures/NightclubLogoBrick.jpg";


const TournamentBox = () => {


    return (
        <>
            <div id={styles.tournamentBorder}>
                <h1 id={styles.checkoutTournies}>Upcoming Events</h1>
                <a target="_blank" href="https://start.gg/nightclub">
                <img id={styles.nightclubLogo} src={NightclubLogo} alt="" />
                </a>
            </div>
        </>
    );
};

export default TournamentBox;
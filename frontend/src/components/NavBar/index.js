import styles from './NavBar.module.css';
import srgLogo from "../../pictures/srgLogo.png";

const NavBar = () => {


    return (
        <div id={styles.navBody}>
            <h2 className={styles.navLinks}>Events</h2>
            <h2 className={styles.navLinks}>Tournament Data</h2>
            <div id={styles.navLogo}>
                <img src={srgLogo} id={styles.navLogo} alt="" />
            </div>
            <h2 className={styles.navLinks}>Staff</h2>
            <h2 className={styles.navLinks}>Contact Us</h2>
        </div>
    );
};

export default NavBar;
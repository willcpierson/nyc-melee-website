import styles from './NavBar.module.css';
import nycmelee from "../../pictures/nycmelee.png";

const NavBar = () => {


    return (
        <div id={styles.navBody}>
            <div id={styles.navLogo}>
                <img src={nycmelee} id={styles.navLogo} alt="NYC Melee Logo" />
            </div>
            <div className={styles.sideLinks}>
                <h2 className={styles.navLinks}>Events</h2>
                <h2 className={styles.navLinks}>Tournament Data</h2>
                <h2 className={styles.navLinks}>Staff</h2>
                <h2 className={styles.navLinks}>About Us</h2>
            </div>
        </div>
    );
};

export default NavBar;
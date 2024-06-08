import styles from './NavBar.module.css';
import nycmelee from "../../pictures/nycmelee.png";
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <div id={styles.navBody}>
            <div id={styles.navLogo}>
                <Link classname={styles.links} to="/">
                    <img src={nycmelee} id={styles.navLogo} alt="NYC Melee Logo" />
                </Link>
            </div>
            <div className={styles.sideLinks}>
                <Link classname={styles.links} to="/events">
                    <h2 className={styles.navLinks}>Events</h2>
                </Link>
                <Link classname={styles.links} to="/staff">
                    <h2 className={styles.navLinks}>Staff | HIDE FROM PUBLIC |</h2>
                </Link>
                <Link classname={styles.links} to="/about">
                    <h2 className={styles.navLinks}>About Us</h2>
                </Link>
            </div>
        </div>
    );
};

export default NavBar;
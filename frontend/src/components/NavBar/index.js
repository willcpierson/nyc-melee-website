import styles from './NavBar.module.css';

const NavBar = () => {


    return (
        <div id={styles.navBody}>
            <h1 className={styles.helloNav}>Hello again from NavBar!</h1>
            <div id={styles.navLogo}>
                <img src="" alt="" />
            </div>
            <h1 className={styles.helloNav}>Hello from NavBar!</h1>
        </div>
    );
};

export default NavBar;
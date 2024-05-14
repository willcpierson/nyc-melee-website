import styles from "./AboutPage.module.css";
import SYGPatti from "../../pictures/aboutPagePics/SYGPatti.jpg";
import SYGFinalComms from "../../pictures/aboutPagePics/SYGFinalComms.jpg";
import SYGJoJo from "../../pictures/aboutPagePics/SYGJoJo.jpg";

const AboutPage = () => {


    return (
        <div id={styles.aboutBody}>
            <section className={styles.aboutDescription}>
                <p className={styles.aboutParagraph}>NYC Melee is a non-profit organization with the aim of providing both a competitive and
                    welcoming community environment, allowing players to build long-lasting friendships and
                    unforgettable moments. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Aspernatur fugit libero deserunt accusantium maxime neque facilis repellat reprehenderit. 
                    Tempore repellendus dolores deserunt hic enim soluta corporis, saepe inventore aliquam sint!
                </p>
                <img className={styles.aboutPics} src={SYGPatti} alt="" />
            </section>
            <section className={styles.aboutDescription}>
                <img id={styles.middlePic} className={styles.aboutPics} src={SYGFinalComms} alt="" />
                <p className={styles.aboutParagraph}>NYC Melee is a non-profit organization with the aim of providing both a competitive and
                    welcoming community environment, allowing players to build long-lasting friendships and
                    unforgettable moments. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Aspernatur fugit libero deserunt accusantium maxime neque facilis repellat reprehenderit. 
                    Tempore repellendus dolores deserunt hic enim soluta corporis, saepe inventore aliquam sint!
                </p>
            </section>
            <section className={styles.aboutDescription}>
                <p className={styles.aboutParagraph}>NYC Melee is a non-profit organization with the aim of providing both a competitive and
                    welcoming community environment, allowing players to build long-lasting friendships and
                    unforgettable moments. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Aspernatur fugit libero deserunt accusantium maxime neque facilis repellat reprehenderit. 
                    Tempore repellendus dolores deserunt hic enim soluta corporis, saepe inventore aliquam sint!
                </p>
                <img  className={styles.aboutPics} src={SYGJoJo} alt="" />
            </section>
        </div>
    );
};

export default AboutPage;
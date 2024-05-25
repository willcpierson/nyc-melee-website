import styles from "./AboutPage.module.css";
import SYGPatti from "../../pictures/aboutPagePics/SYGPatti.jpg";
import NightclubStats from "../../pictures/aboutPagePics/NightclubStats.jpg";
import SYGFinalComms from "../../pictures/aboutPagePics/SYGFinalComms.jpg";
import RedbullLogo from "../../pictures/aboutPagePics/RedbullLogo.png";

const AboutPage = () => {


    return (
        <div id={styles.aboutBody}>
            <section className={styles.aboutDescription}>
                <p className={styles.aboutParagraph}>NYC Melee is a non-profit organization with the aim of providing both a competitive and
                    inclusive community environment, allowing players to build long-lasting friendships and
                    unforgettable moments. We're proud to bring top level talent to our grassroots scene,
                    with our team consisting of professional level software engineers, photographers and videographers, event organizers,
                    and more.
                </p>
                <img className={styles.aboutPics} src={SYGPatti} alt="" />
            </section>
            <section className={styles.aboutDescription}>
                <img id={styles.middlePic} className={styles.aboutPics} src={NightclubStats} alt="" />
                <p className={styles.aboutParagraph}> With our weekly events averaging 86 entrants in 2023, we have solidified our flaship event, "The Nightclub",
                as the biggest Super Smash Bros. Melee local in the world. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aut iste commodi animi quasi
                 perferendis in hic fugit ipsam velit excepturi perspiciatis nulla praesentium, molestias accusantium ut sequi consequuntur corrupti?
                </p>
            </section>
            <section className={styles.aboutDescription}>
                <p className={styles.aboutParagraph}> We've worked with numerous brands and sponsors in the past, including names such as
                Redbull, Beastcoast, The Brooklyn Nets, and more. We're always looking to collaborate with more teams and communities in the future,
                to not only run great events but newly define what it means to run an unforgettable event.
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Aspernatur fugit libero deserunt accusantium maxime neque facilis repellat reprehenderit. 
                    Tempore repellendus dolores deserunt hic enim soluta corporis, saepe inventore aliquam sint!
                </p>
                <img  className={styles.aboutPics} src={SYGFinalComms} alt="" />
            </section>
            {/* <section id={styles.sponsorBox}>
                <h2>Our Past Sponsors</h2>
                <div id={styles.sponsorImages}>
                    <img className={styles.logo} src="" alt=""/>
                    <img className={styles.logo} src={RedbullLogo} alt=""/>
                    <img className={styles.logo} src="" alt=""/>
                </div>
            </section> */}
        </div>
    );
};

export default AboutPage;
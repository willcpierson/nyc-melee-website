import styles from "./StaffMember.module.css"
import willPortrait from "../../pictures/portraits/WillPortrait.jpg"


const StaffMember = () => {


    return (
        <>
            <div id={styles.staffBox}>
                <div id={styles.textBox}>
                    <h2 id={styles.nameTag}>Will Pierson</h2>
                    <h3 id={styles.positionTitle}>President of the Board, Lead Tournament Organizer, Software Engineer</h3>
                </div>
                <img id={styles.portrait} src={willPortrait} alt="" />
            </div>

            <div id={styles.staffBox}>
            <div id={styles.textBox}>
                <h2 id={styles.nameTag}>Phil Nolan</h2>
                <h3 id={styles.positionTitle}>Board Member, Head of Media & Marketing</h3>
            </div>
            <img id={styles.portrait} src={willPortrait} alt="" />
            </div>

            <div id={styles.staffBox}>
            <div id={styles.textBox}>
                <h2 id={styles.nameTag}>Gabe Karon</h2>
                <h3 id={styles.positionTitle}>Board Member, Head of Finance</h3>
            </div>
            <img id={styles.portrait} src={willPortrait} alt="" />
            </div>
        </>
    );
};

export default StaffMember;
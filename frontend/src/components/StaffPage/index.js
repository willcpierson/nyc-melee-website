import styles from "./StaffPage.module.css"
import StaffMember from "../StaffMember";

const StaffPage = () => {



    return (
        <>
            <h2>NYC Melee Staff</h2>
            <div id={styles.staffList}>
                <StaffMember />
                <StaffMember />
                <StaffMember />
                <StaffMember />
                <StaffMember />
            </div>
            <h2>NYC Community Talent</h2>
        </>
    );
};

export default StaffPage;
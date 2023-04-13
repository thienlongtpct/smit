import {styles as commonStyles} from "./common";

import ViewAll from "./ViewAll";
import {Background} from "./Background";

export default function Header() {
    const styles = {
        header: {
            overflow: "hidden"
        },
        hero: {
            position: "absolute",
            zIndex: 1,

            color: "#fff",
            textAlign: "center",

            width: "100%",
            marginTop: "200px",
            padding: "0 150px",
        }
    }
    return (
        <div style={styles.header}>
            <div className="hero aos-init aos-animate" style={styles.hero}>
                <div style={commonStyles.ranking}>#1 Vietnam</div>
                <div style={commonStyles.title}>Professional Advertising <br/> Solutions</div>
                <div style={commonStyles.subtitle}>Increase your productivity by up to 60%</div>
                <ViewAll />
            </div>
            <Background />
        </div>
    )
}
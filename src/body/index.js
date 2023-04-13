import styles from './index.module.css';
import templateStyles from "../template/hr.module.css";

import Why from "./why";
import Solution from "./solution";
import Martech from "./martech";
import Install from "./install";
import Partner from "./partner";

const Body = () => (
    <div className={styles.body}>
        <Why/>
        <div className={templateStyles.hr2}/>
        <Solution/>
        <Martech/>
        <Install/>
        <Partner/>
    </div>
)

export default Body;
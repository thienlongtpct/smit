import templateStyles from "../../template/hr.module.css";
import martechStyles from "./index.module.css";

import Top from "./js/Top";
import Items from "./js/Items";

const Martech = () => (
    <div className={martechStyles.martech}>
        <Top/>
        <div className={templateStyles.hr1}/>
        <Items/>
    </div>
)

export default Martech;
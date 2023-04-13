import {useState} from "react";

import navButtonStyles from "../styles/NavButton.module.css";

import ExtendedMenu from "./ExtendedMenu";

const ExtendedNavButton = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className={`${navButtonStyles.item} ${navButtonStyles.list}`} onMouseOver={() => setMenuOpen(true)}
             onMouseLeave={() => setMenuOpen(false)}>
            Solutions
            <ExtendedMenu open={menuOpen} setMenuOpen={setMenuOpen}/>
        </div>
    );
}

export default ExtendedNavButton;
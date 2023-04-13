import {useState} from "react";

import extendedMenuStyles from "../styles/ExtendedMenu.module.css";


const ExtendedMenu = ({open, setMenuOpen}) => {
    const [image, setImage] = useState(0);
    const [entered, setEntered] = useState(false);

    const handleEnter = () => setEntered(true);
    const handleLeave = () => {
        if (entered) {
            setEntered(false);
            setMenuOpen(false);
        }
    }

    const Item = ({id, image, name, desc}) => (
        <a href={process.env.REACT_APP_LINK} className={extendedMenuStyles.menuBox} onMouseOver={() => setImage(id)}>
            <img src={process.env.PUBLIC_URL + "/images/navbar/" + image + ".svg"} alt=""/>
            <div>
                <div className={extendedMenuStyles.name}>{name}</div>
                <div className={extendedMenuStyles.desc}>{desc}</div>
            </div>
        </a>
    );

    const SubMenu = ({title, items}) => (
        <div className={extendedMenuStyles.subMenu}>
            <div className={extendedMenuStyles.title}>{title}</div>
            <div className={extendedMenuStyles.items}>
                {items.map(({id, image, name, desc}) => <Item key={id} id={id} image={image} name={name} desc={desc}/>)}
            </div>
        </div>
    )

    const subMenus = [
        {
            title: "Management and Reporting",
            items: [
                {
                    id: 0,
                    image: "menu-ads-check",
                    name: "Ads Check by SMIT",
                    desc: "View & manage advertising accounts"
                },
                {
                    id: 1,
                    image: "menu-ads-manager-2",
                    name: "Ads Manager Pro",
                    desc: "Campaign management"
                },
                {
                    id: 2,
                    image: "menu-smit-connect",
                    name: "SMIT Connect",
                    desc: "Manage and Connect"
                }
            ]
        },
        {
            title: "Support Management",
            items: [
                {
                    id: 3,
                    image: "menu-smit-translator",
                    name: "SMIT Translator",
                    desc: "Multi-platform conversation translation"
                },
                {
                    id: 4,
                    image: "menu-cookie-manager",
                    name: "SMIT Cookies",
                    desc: "Advanced cookie manager"
                },
                {
                    id: 5,
                    image: "menu-find-fbid",
                    name: "Find Facebook ID",
                    desc: "Facebook UID lookup"
                },
                {
                    id: 6,
                    image: "menu-total-check",
                    name: "SMIT Check",
                    desc: "Original file authentication"
                }
            ]
        }
    ];

    return (
        <div className={extendedMenuStyles.board} style={{maxHeight: (open || entered) ? "482px" : 0}}
             onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <div className={extendedMenuStyles.in}>
                <div>
                    {subMenus.map(({title, items}, id) => <SubMenu key={id} title={title} items={items}/>)}
                </div>
                <img src={process.env.PUBLIC_URL + "/images/navbar/board-ads-check.png"}
                     style={{display: image === 0 ? "initial" : "none"}} alt=""/>
                <img src={process.env.PUBLIC_URL + "/images/navbar/board-ads-manager-2.png"}
                     style={{display: image === 1 ? "initial" : "none"}} alt=""/>
                <img src={process.env.PUBLIC_URL + "/images/navbar/board-smit-connect.png"}
                     style={{display: image === 2 ? "initial" : "none"}} alt=""/>
                <img src={process.env.PUBLIC_URL + "/images/navbar/board-smit-translator.png"}
                     style={{display: image === 3 ? "initial" : "none"}} alt=""/>
                <img src={process.env.PUBLIC_URL + "/images/navbar/board-cookie-manager.png"}
                     style={{display: image === 4 ? "initial" : "none"}} alt=""/>
                <img src={process.env.PUBLIC_URL + "/images/navbar/board-find-fbid.png"}
                     style={{display: image === 5 ? "initial" : "none"}} alt=""/>
                <img src={process.env.PUBLIC_URL + "/images/navbar/board-total-check.png"}
                     style={{display: image === 6 ? "initial" : "none"}} alt=""/>
            </div>
        </div>
    );
}

export default ExtendedMenu;
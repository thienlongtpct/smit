import supportStyles from '../index.module.css';

import Item from "./Item";

const Items = () => {
    const items = [
        {
            image: "sp-translator",
            title: "SMIT Translator",
            desc: "Translate the conversation automatically. Multi-language and cross-platform support: Pancake, Nobita, or Smax"
        },
        {
            image: "sp-cookie",
            title: "SMIT Cookies",
            desc: "Manage multiple cookies on the same browser and on multiple devices through cloud data synchronization"
        },
        {
            image: "sp-findid",
            title: "Find Facebook ID",
            desc: "Tool to look up ID through Facebook account link"
        }
    ];

    return (
        <div className={supportStyles.items}>
            {items.map((item, id) => <Item key={id} image={item.image} title={item.title} desc={item.desc}/>)}
        </div>
    )
}

export default Items;
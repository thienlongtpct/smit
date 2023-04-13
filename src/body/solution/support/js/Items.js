import commonStyles from '../../../template/common.module.css';
import supportStyles from './styles/index.module.css';

const Item = ({image, title, desc}) => (
    <div className={`${supportStyles.item} ${commonStyles.itemBox}`}>
        <img src={process.env.PUBLIC_URL + "/images/index/" + image + ".svg"} alt=""/>
        <div className={supportStyles.title}>{title}</div>
        <div className={supportStyles.desc}>{desc}</div>
        <button className={commonStyles.buttonMain} style={{ marginTop: "auto"}}>
            <span className={commonStyles.arrow}>Try</span>
        </button>
    </div>
)

export default function Items() {
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
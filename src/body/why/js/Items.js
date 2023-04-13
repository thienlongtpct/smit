import commonStyles from '../../template/common.module.css';
import itemsStyles from './styles/Items.module.css';

const Item = ({id, title, desc}) => (
    <div className={`${itemsStyles.item} ${commonStyles.itemBox}`}>
        <img src={process.env.PUBLIC_URL + "/images/index/why-" + id + ".svg"} alt=""/>
        <div className={itemsStyles.title}>{title}</div>
        <div className={itemsStyles.desc}>{desc}</div>
    </div>
)

export default function Items() {
    const items = [
        {
            title: "Save time",
            desc: "With just one click or performing all operations at the same time, it is an advantage to help advertisers save time."
        },
        {
            title: "Optimize resources",
            desc: "Does not require too many resources to operate, with SMIT businesses will optimize a lot of costs to monitor advertising effectiveness."
        },
        {
            title: "High level of security",
            desc: "Committed to not buying, selling, exchanging or using for commercial purposes with any user data."
        },
        {
            title: "Free to try",
            desc: "All SMIT products support a partially free experience."
        },
        {
            title: "Always up to date",
            desc: "The technical team always monitors and updates in a timely manner to ensure the best experience for product users."
        },
        {
            title: "Support & Advice",
            desc: "Always ready and enthusiastic are the top priority criteria of the customer care team."
        }
    ];

    return (
        <div className={itemsStyles.items}>
            {items.map((item, id) => <Item key={id} id={id} title={item.title} desc={item.desc}/>)}
        </div>
    )
}
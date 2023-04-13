import commonStyles from '../../../../template/common.module.css';
import supportStyles from '../index.module.css';

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

export default Item;
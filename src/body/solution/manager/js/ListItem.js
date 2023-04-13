import item1Styles from "../styles/Item1.module.css";

const ListItem = ({children}) => (
    <div className={item1Styles.ul}>
        <div className={item1Styles.li}>
            {children}
        </div>
    </div>
)

export default ListItem;
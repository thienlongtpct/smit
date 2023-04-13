import viewAllStyles from './styles/ViewAll.module.css';

const ViewAll = () => (
    <button href={process.env.REACT_APP_LINK} className={`button ${viewAllStyles.viewAllOuter}`}>
        <div className={viewAllStyles.viewAllInner}>
            <i/>
            <span>View all</span>
        </div>
    </button>
);

export default ViewAll;
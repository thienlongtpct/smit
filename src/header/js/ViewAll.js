import viewAllStyles from '../styles/ViewAll.module.css';

const ViewAll = () => {
    const handleClick = (e) => {
        e.preventDefault();
        window.location.href = process.env.REACT_APP_LINK;
    }

    return (
        <button className={`button ${viewAllStyles.viewAllOuter}`} onClick={handleClick}>
            <div className={viewAllStyles.viewAllInner}>
                <i/>
                <span>View all</span>
            </div>
        </button>
    );
}

export default ViewAll;
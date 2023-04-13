import navButtonStyles from '../styles/NavButton.module.css';

const NavButton = ({link, children}) => (
    <a href={link} className={navButtonStyles.item} rel="noreferrer">
        {children}
    </a>
);

export default NavButton;
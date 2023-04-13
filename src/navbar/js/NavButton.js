import navbarStyles from './index.module.css';

export default function NavButton({link, children}) {
    return (
        <a href={link} target="_blank" className={navbarStyles.item}>
            {children}
        </a>
    )
}
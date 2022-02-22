import { useEffect, useState } from 'react';
// import { NavLink } from 'react-router-dom';
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEITRAL } from '@context/ThemeProvider';
import CustomLink from '@components/CustomLink'
import Favourite from '@components/Favourite';
import styles from './Header.module.css';
import imgLight from './img/light.png';
import imgDark from './img/dark.png';
import imgNeitral from './img/neitral.png';

const Header = () => {
    const [icon, setIcon] = useState(imgNeitral);
    const isTheme = useTheme();

    useEffect(() => {
        switch (isTheme.theme) {
            case THEME_LIGHT: setIcon(imgLight); 
                break;
            case THEME_DARK: setIcon(imgDark); 
                break;
            case THEME_NEITRAL: setIcon(imgNeitral); 
                break;
        
            default: setIcon(imgNeitral)
        }
    }, [isTheme])

    return (
        <div className={styles.container}>
            <img className={styles.logo} src={icon} alt="Logo" />
            <ul className={styles.list__container}>
                <li>
                    <CustomLink to="/" >Home</CustomLink>
                </li>
                <li>
                    <CustomLink to="/people/" >People</CustomLink>
                </li>
                <li>
                    <CustomLink to="/search" >Search</CustomLink>
                </li>
                <li>
                    <CustomLink to="/not-found" >Not found</CustomLink>
                </li>
                <li>
                    <CustomLink to="/fail" >Fail</CustomLink>
                </li>
            </ul>

            <Favourite/>
        </div>
    )
}


export default Header;
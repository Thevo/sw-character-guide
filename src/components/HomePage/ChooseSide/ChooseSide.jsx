import propTypes from 'prop-types'; 
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEITRAL } from '@context/ThemeProvider';
import cn from 'classnames'
import imgLightSide from './img/joda.jpeg'
import imgDarktSide from './img/vader.jpeg'
import imgNeitralSide from './img/sokol.jpeg'
import styles from './ChooseSide.module.css';

const ChooeSideItem = ({
    classes,
    theme,
    text,
    img
}) => {
    const isTheme = useTheme();

    return (
        <div className={cn(styles.item, classes)} onClick={() => isTheme.change(theme)}>
            <span className={styles.item__header}>{text}</span>
            <img className={styles.item__img} src={img} alt={text} />
        </div>
    )
}

const ChooseSide = () => {
    const elements = [
        {
            theme: THEME_LIGHT,
            text: "Light Side",
            img: imgLightSide,
            classes: styles.item__light
        },
        {
            theme: THEME_DARK,
            text: "Dark Side",
            img: imgDarktSide,
            classes: styles.item__dark
        },
        {
            theme: THEME_NEITRAL,
            text: "Neitral",
            img: imgNeitralSide,
            classes: styles.item__neitral
        },
    ];

    return (
        <div className={styles.container}>
            {elements.map(({classes, theme, text, img}, index) => (
                <ChooeSideItem 
                    classes={classes}
                    theme={theme}
                    text={text}
                    img={img}
                    key={index}
                />
            ))}
            
        </div>
    )
}

ChooeSideItem.propTypes = {
    classes: propTypes.string,
    theme: propTypes.string,
    text: propTypes.string,
    img: propTypes.string,

}

export default ChooseSide;
import { useNavigate } from 'react-router-dom'
import styles from './PersonLinkBack.module.css';
import iconBack from './img/back.svg'
 
const PersonLinkBack = ({label}) => {
    const navigate = useNavigate()
    const goBack = () => navigate(-1);
    return (
        <>
            <button className={styles.link} onClick={goBack}>
                <img className={styles.link__img} src={iconBack} alt={label} />
                <span>{label}</span>
            </button>
        </>
    )
}

export default PersonLinkBack;
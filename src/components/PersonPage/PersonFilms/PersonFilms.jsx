import { useState, useEffect } from 'react';
import { makeConcurrentRequest } from '@utils/network'
import propTypes from 'prop-types'; 
import styles from './PersonFilms.module.css';

const PersonFilms = ({personFilms}) => {
const [filmsName, setfilmsName] = useState([])
useEffect( () => {
    (async () => {
        const response = await makeConcurrentRequest(personFilms)

        setfilmsName(response);
    })()
}, [])
    return (
        <div className={styles.wrapper}>
            <ul className={styles.list__container}>
                {filmsName
                    .sort((a,b) => a.episode_id - b.episode_id)
                    .map(({title, episode_id}) => 
                        <li className={styles.list__item} key={episode_id}>
                            <span className={styles.list__episode}>Episode {episode_id}</span>
                            <span className={styles.list__colon}> : </span>
                            <span className={styles.list__title}>{title}</span>
                        </li>
                    )}
            </ul>
        </div>
    )
}


PersonFilms.propTypes = {
    tepersonFilmsst: propTypes.array
}

export default PersonFilms;
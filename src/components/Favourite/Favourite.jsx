import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import icon from './img/bookmark.svg'
import styles from './Favourite.module.css';

const Favourite = () => {
    const storeData = useSelector(state => state.favouriteReducer);
    const[count,setcount] = useState()

    useEffect(() => {
        const length = Object.keys(storeData).length
        length.toString().length > 2 ? setcount('...') : setcount(length)
    })

    return (
        <div className={styles.container}>
             <Link to="/favourites" >
                 <span className={styles.counter}>{count}</span>
                <img className={styles.icon} src={icon} alt="Bookmark" />
             </Link>
        </div>
    )
}

export default Favourite;

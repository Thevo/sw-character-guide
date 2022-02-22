import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PeopleList from '@components/PeoplePage/PeopleList'
import styles from './FavouritePage.module.css';

const FavouritePage = () => {
    const [people, setPeople] = useState([]);

    const storeData = useSelector(state => state.favouriteReducer);

    // 1: {
    //     img: "https://starwars-visualguide.com/assets/img/characters/1.jpg",
    //     name: "Luke Skywalker"
    // }

    useEffect(() => {
        const arr = Object.entries(storeData)

        if(arr.length) {
            const res = arr.map( item => {
                return {
                    id: item[0],
                    ...item[1]
                }
            })
            setPeople(res)
       
        }
    },[]);
    
    return (
        <>
                <h1 className="header__text">Favourite Page</h1>
                {people.length 
                    ? <PeopleList people={people}/>
                    : <h2 className={styles.comment}>No Data</h2>}
                
        </>
    )
}




export default FavouritePage;
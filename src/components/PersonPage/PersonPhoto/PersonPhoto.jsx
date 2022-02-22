import { useDispatch } from 'react-redux';
import { setPersonToFavourite, removePersonToFavourite } from '@store/actions'
import propTypes from 'prop-types';     
import iconFavourite from './img/favor.svg'
import iconFavouriteFill from './img/favor-fill.svg'
import styles from './PersonPhoto.module.css';

const PersonPhoto = ({
    personPhoto,
    personName, 
    personID,
    personFavourite,
    setpersonFavourite
}) => {
    const dispatch = useDispatch();
    
    const dispatchFavouritePeople = () => {
        if(personFavourite) {
            dispatch(removePersonToFavourite(personID))
            setpersonFavourite(false)
        } else {
            dispatch(setPersonToFavourite({
                [personID]: {
                    name: personName,
                    img: personPhoto
                }
            }))
            setpersonFavourite(true)
        }
    }

    return (
        <>
            <div className={styles.container}>
                <img className={styles.photo} src={personPhoto} alt={personName} />
                <img 
                    src={personFavourite ? iconFavouriteFill : iconFavourite} 
                    onClick={dispatchFavouritePeople}
                    alt="Favourites" 
                    className={styles.favourite}
                />
            </div>

        </>
    )
}


PersonPhoto.propTypes = {
    personPhoto: propTypes.string,
    personName: propTypes.string,
    personID: propTypes.string,
    personFavourite: propTypes.bool,
    setpersonFavourite: propTypes.func
}

export default PersonPhoto;
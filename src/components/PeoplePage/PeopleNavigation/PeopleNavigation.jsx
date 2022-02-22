import UiButton from '@ui/UiButton'
import propTypes from 'prop-types'; 
import { Link } from 'react-router-dom'
import styles from './PeopleNavigation.module.css';

const PeopleNavigation = ({
    getResource,
    prevPage,
    nextPage,
    counterPage
}) => {

    const handleChangeNextPage = () => getResource(nextPage)
    const handleChangePrevPage = () => getResource(prevPage)

    return (
        <div className={styles.container}>
            <Link to={`/people/?page=${counterPage-1}`} className={styles.buttons}>
                <UiButton
                    text="Previous"
                    onClick={handleChangePrevPage}
                    disabled={!prevPage}
                />
            </Link>
            <Link to={`/people/?page=${counterPage+1}`} className={styles.buttons}>
                <UiButton
                    text="Next"
                    onClick={handleChangeNextPage}
                    disabled={!nextPage}
                />
            </Link>
        </div>
    )
}


PeopleNavigation.propTypes = {
    getResource: propTypes.func,
    prevPage: propTypes.string,
    nextPage: propTypes.string,
    counterPage: propTypes.number
}

export default PeopleNavigation;
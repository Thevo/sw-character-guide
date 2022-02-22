import { Link, useMatch } from 'react-router-dom'
import propTypes from 'prop-types'; 
// import styles from './CustomLink.module.css';

const CustomLink = ({children, to, ...props}) => {
    const match = useMatch({
        path: to,
        end: to.length === 1,
    });

    return (
        <Link 
            to={to}
            {...props}
            className={match ? 'active' : ''}    
        >
            {children}
        </Link>
    )
}


CustomLink.propTypes = {
    to: propTypes.string,
    children: propTypes.string
}

export default CustomLink;
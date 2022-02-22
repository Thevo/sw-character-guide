import cn from 'classnames'
import propTypes from 'prop-types'; 

import clearIcon from './img/close.svg'

import '../index.css'
import styles from './UiInput.module.css';

const UiInput = ({
    value,
    handleInputChange,
    placeholder,
    classes
}) => (
    <div className={cn(styles.wrapper__input, classes)}>
        <input 
            type="text"
            value={value}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder={placeholder}
            className={styles.input}
        />
        <img 
            onClick={() => value && handleInputChange('')}
            src={clearIcon} 
            alt="Clear" 
            className={cn(styles.clear,!value && styles.clear__disabled)}
        />
    </div>
)

UiInput.propTypes = {
    value: propTypes.string,
    handleInputChange: propTypes.func,
    placeholder: propTypes.string,
    classes: propTypes.string
}

export default UiInput;
import {useState, useEffect, useCallback} from 'react'
import propTypes from 'prop-types'; 
import {debounce} from 'lodash'

import {getApiResource} from '@utils/network'
import {withErrorApi} from '@hoc-helpers/withErrorApi'
import {API_SEARCH} from '@constants/api'
import {getPeopleID, getPeopleImage} from '@services/getPeopleData'

import SearchPageInfo from '@components/SearchPage/SearchPageInfo'
import UiInput from '@ui/UiInput'

import styles from './SearchPage.module.css';

const SearchPage = ({seterrorApi}) => {
    const [people, setPeople] = useState([])
    const [inputSearchValue, setInputSearchValue] = useState('')

    const getResponse = async param => {
        const res = await getApiResource(API_SEARCH+param)

        if(res) {
            const peopleList = res.results.map(({name, url}) => {
                const id = getPeopleID(url)
                const img = getPeopleImage(id)
                
                return {
                    id,
                    name,
                    img
                }
            })

            setPeople(peopleList)
            seterrorApi(false)
        } else {
            seterrorApi(true)
        }
    }

    useEffect(() => {
        getResponse('')
    }, [])

    const debouncedGetResponse = useCallback(debounce(val => getResponse(val), 300),[])
    
 
    const handleInputChange = (value) => {
        setInputSearchValue(value)
        debouncedGetResponse(value)
    }
    return (
        <>
            <h1 className="header__text">Search</h1>
            <UiInput
                value={inputSearchValue}
                handleInputChange={handleInputChange}
                placeholder="Input char's name"
                classes={styles.input__search}
            />
            <SearchPageInfo people={people} />
        </>
    )
}


SearchPage.propTypes = {
    seterrorApi: propTypes.func
}

export default withErrorApi(SearchPage);
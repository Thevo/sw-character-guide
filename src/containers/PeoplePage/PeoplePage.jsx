import { useState, useEffect } from 'react'
import propTypes from 'prop-types'; 

import {withErrorApi} from '@hoc-helpers/withErrorApi'
import PeopleList from '@components/PeoplePage/PeopleList'
import PeopleNavigation from '@components/PeoplePage/PeopleNavigation'

import {getApiResource} from '@utils/network'
import {getPeopleID, getPeopleImage, getPeoplePageId} from '@services/getPeopleData'
import {API_PEOPLE} from '@constants/api'
import {useQueryParams} from '@hooks/useQueryParams';
// import styles from './PeoplePage.module.css';

const PeoplePage = ({seterrorApi}) => {
    const [people, setPeople] = useState(null);
    const [prevPage, setprevPage] = useState(null);
    const [nextPage, setnextPage] = useState(null);
    const [counterPage, setcounterPage] = useState(1);
    
    const query = useQueryParams()
    const queryPage = query.get('page')
    

    const getResource = async (url) => {
        const res = await getApiResource(url)
        
        if(res) {
            const peopleList = res.results.map(({name,url}) => {
                const id = getPeopleID(url)
                const img = getPeopleImage(id)
    
                return {id,name,img}
            })
            setPeople(peopleList);
            setprevPage(res.previous)
            setnextPage(res.next)
            setcounterPage(getPeoplePageId(url))
            seterrorApi(false);
        } else {
            seterrorApi(true);
        }
    }

    useEffect(() => {
        if(!queryPage) {
            getResource(API_PEOPLE+1);
        }else {
            getResource(API_PEOPLE+queryPage);
        }
        
    },[])

    return (
        <>  
            <PeopleNavigation
                getResource={getResource}
                prevPage={prevPage}
                nextPage={nextPage}
                counterPage={counterPage}
            />
            {people && <PeopleList people={people} />}
        </>
    )
}


PeoplePage.propTypes = {
    seterrorApi: propTypes.func
}

export default withErrorApi(PeoplePage);

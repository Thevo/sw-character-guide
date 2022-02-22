import { useSelector } from 'react-redux'
import { useParams } from "react-router-dom";
import React, { useEffect, useState, Suspense } from "react";
import propTypes from 'prop-types'; 

import  PersonInfo  from '@components/PersonPage/PersonInfo'
import  PersonPhoto  from '@components/PersonPage/PersonPhoto'
import  PersonLinkBack from '@components/PersonLinkBack'
import  UiLoading from '@ui/UiLoading'

import { getApiResource } from '@utils/network'
import { getPeopleImage } from '@services/getPeopleData'
import { API_PERSON } from '@constants/api'
import { withErrorApi } from '@hoc-helpers/withErrorApi'

import styles from './PersonPage.module.css';

const PersonFilms = React.lazy(() => import('@components/PersonPage/PersonFilms'))

const PersonPage = ({seterrorApi}) => {
    const [personID, setpersonID] = useState(null)
    const [personInfo, setpersonInfo] = useState(null)
    const [personName, setpersonName] = useState(null)
    const [personPhoto, setpersonPhoto] = useState(null)
    const [personFilms, setpersonFilms] = useState(null)
    const [personFavourite, setpersonFavourite] = useState(false)

    const storeData = useSelector(state => state.favouriteReducer);

    const {id} = useParams();

    useEffect(() => {

        (async () => {
            const res = await getApiResource(`${API_PERSON}/${id}/`);  
            
            storeData[id] ? setpersonFavourite(true) : setpersonFavourite(false)

            setpersonID(id)

            if(res) {
                setpersonInfo([
                    { title: 'Height', data: res.height },
                    { title: 'Mass', data: res.mass },
                    { title: 'Hair Color', data: res.hair_color },
                    { title: 'Skin Color', data: res.skin_color },
                    { title: 'Birth Year', data: res.birth_year },
                    { title: 'Gender', data: res.gender },
                ]);
                setpersonName(res.name)
                setpersonPhoto(getPeopleImage(id))
                res.films.length && setpersonFilms(res.films)
                seterrorApi(false)
            } else {
                seterrorApi(true)
            }
        })()

    }, [id])
    return (
        <>
            <PersonLinkBack label="Go back" />

            <div className={styles.wrapper}>
                <span className={styles.person__name}>{personName}</span>

                <div className={styles.container}>
                <PersonPhoto  
                    personPhoto={personPhoto}
                    personName={personName}
                    personID={personID}
                    personFavourite={personFavourite}
                    setpersonFavourite={setpersonFavourite}
                />

                {personInfo && <PersonInfo personInfo={personInfo} />}

                {personFilms && (
                    <Suspense fallback={<UiLoading theme="white"/>}>
                        <PersonFilms personFilms={personFilms}/>
                    </Suspense>
                )}
            </div> 
        </div>
        </>
    )
}


PersonPage.propTypes = {
    seterrorApi: propTypes.func
}

export default withErrorApi(PersonPage);
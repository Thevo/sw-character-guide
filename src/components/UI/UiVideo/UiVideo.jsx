import {useEffect, useRef} from 'react'
import propTypes from 'prop-types'; 
import cn from 'classnames'
import styles from './UiVideo.module.css';

const UiVideo = ({src, classes, playbackRate=1.0}) => {

    const videoRef = useRef(null)

    useEffect(() => {
        videoRef.current.playbackRate = playbackRate
    },[])

    return (
        <video
            loop
            autoPlay
            muted 
            className={cn(styles.video, classes)}
            ref={videoRef}
        >
            <source src={src} />
        </video>
    )
}


UiVideo.propTypes = {
    src: propTypes.string,
    classes: propTypes.string,
    playbackRate: propTypes.number,
}

export default UiVideo;
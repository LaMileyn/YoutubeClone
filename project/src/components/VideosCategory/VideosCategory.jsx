import React, {useEffect, useState} from "react";
import s from './videos_categorys.module.css';
import Video from "@components/Video";
import {useDispatch, useSelector} from "react-redux";
import {getPopularVideos, getPopularVideosByCategory} from "../../redux/thunks/thunks";
import {flushSync} from "react-dom";
import Skelletone from "../../helpers/skeletones/skeletones";

const VideosCategory = () => {
    const dispatch = useDispatch();
    const [ fetchingData, setFetching] = useState(false)

    useEffect(() => {
        dispatch(getPopularVideos())
    }, [dispatch])

    const { videos, totalCount, activeCategory,loading } = useSelector(state => state.homeVideosReducer)
    useEffect(() =>{
        if (fetchingData){
            if (activeCategory === "All") {
                    dispatch(getPopularVideos())
            } else {
                    dispatch(getPopularVideosByCategory(activeCategory))
            }
        }
    },[fetchingData])
    useEffect(()=>{
        if (loading === false){
            setFetching(false)
        }
    },[loading])

    function scrollFunc(event) {
        if ( event.target.documentElement.scrollHeight - (event.target.documentElement.scrollTop + window.innerHeight) < 170
        && videos.length !== totalCount){
            setFetching(true)
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', scrollFunc)
        return () => document.removeEventListener('scroll', scrollFunc)
    }, [])


    return (
        <>
            <div className={s.container_videos}>
                <ul className={s.videolist}>
                    {
                        loading
                            ?
                            (
                               [...Array(20)].map( el => <Skelletone type={"home"}/>)
                            )
                            :
                            (
                                videos.map( (video,index) => (
                                    <Video key={index} video={video} totalCount={totalCount}/>
                                ))
                            )

                    }
                </ul>
            </div>
        </>
    )
}

export default VideosCategory;
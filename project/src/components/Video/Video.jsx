import React, {useEffect, useState} from 'react';
import s from './Video.module.css'
import photo from '@files/photos/photo1.jpg'
import {request} from "../../api/axios.instance";
import moment from "moment";
import numeral from 'numeral'
import Skelletone from "../../helpers/skeletones/skeletones";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";


const Video = ({video}) => {
    const {loading} = useSelector(state => state.homeVideosReducer)
    const {id, snippet: {publishedAt, channelId, channelTitle, title, thumbnails: {medium}}} = video
    const [views, setViews] = useState(null)
    const [duration, setDuration] = useState(null)
    const [channelIcon, setChannelIcon] = useState(null)
    const seconds = moment.duration(duration).asSeconds()
    const _duration = moment.utc(seconds * 1000).format("mm:ss")
    const _videoId = id?.videoId || id

    useEffect(async () => {
        const {data: {items}} = await request('/videos', {
            params: {
                part: "contentDetails,statistics",
                id: _videoId
            }
        })
        setDuration(items[0].contentDetails.duration)
        setViews(items[0].statistics.viewCount)


    }, [_videoId])
    useEffect(async () => {
        const {data: {items}} = await request('/channels', {
            params: {
                part: "snippet",
                id: channelId
            }
        })
        setChannelIcon(items[0].snippet.thumbnails.default)

    }, [channelId])
    const history = useNavigate()
    const handleClick = () =>{
        history(`/watch/${_videoId}`)
    }
    return (
        <>
            {
                ( loading )
                    ?  <Skelletone type={'hello'}/>
                    : (
                        <div className={s.video_container} onClick={handleClick} >
                            <div className={s.picture}>
                                <img src={medium.url} alt=""/>
                                <div className={s.time_to_watch}>{_duration}</div>
                            </div>
                            <div className={s.about}>
                                <div className={s.about_left}>
                                    <div className={s.photo_author}>
                                        <img src={channelIcon?.url} alt=""/>
                                    </div>
                                </div>
                                <div className={s.about_right}>
                                    <h3 className={s.video_title}>{title}</h3>
                                    <small className={s.name_channel}>{channelTitle}</small>
                                    <div className={s.watches_and_time}>
                                        <small className={s.count_watches}>{numeral(views).format("0.a")} • </small>
                                        <small className={s.time_ago}>{moment(publishedAt).fromNow()}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
            }

        </>
    )
}
export default Video;
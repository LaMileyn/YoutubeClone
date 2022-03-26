import React from 'react';
import s from "./skelletones.module.css"

const Skelletone = ({type}) => {

    const HomeScreenVideosSkelletone = () => {
        return (
            <div className={s.video_containerHomeScreen}>
                <div className={s.pictureHomeScreen}></div>
                <div className={s.aboutHomeScreen}>
                    <div className={s.about_leftHomeScreen}>
                        <div className={s.photo_authorHomeScreen}>
                        </div>
                    </div>
                    <div className={s.about_rightHomeScreen}>
                        <div className={s.video_titleHomeScreen}></div>
                        <small className={s.name_channelHomeScreen}></small>
                    </div>
                </div>
            </div>
        )
    }
    const NextVideosSkelletone = () => {
        return (
            <div className={s.videoInlineContainer}>
                <div className={s.videoInlineLeft}></div>
                <div className={s.videoInlineRight}>
                    <div className={s.rightInlineUp}></div>
                    <div className={s.rightInlineBottom}></div>
                </div>
            </div>
        )

    }
    const VideoDescription = () => {
        return (
            <div className={s.containerInformationVideo}>
                <div className={s.top}>
                    <div className={s.titleInformationVideo}></div>
                    <div className={s.viewAndDateInformationVideo}></div>
                </div>
                <div className={s.bottom}>
                    <div className={s.bottomWithoutDescriptionInformationVideo}>
                        <div className={s.avaAndNameInformationVideo}>
                            <div className={s.avaInformationVideo}></div>
                            <div className={s.channelPersonInformationVideo}>
                                <div className={s.channelNameInformationVideo}></div>
                                <div className={s.channelSubscribeerInformationVideo}></div>
                            </div>
                        </div>
                    </div>
                    <div className={s.describtionInformationVideo1}></div>
                    <div className={s.describtionInformationVideo2}></div>
                    <div className={s.describtionInformationVideo3}></div>
                </div>
            </div>
        )
    }
    const Comments = () =>{
        return (
            <div className={s.containerComments}>
                <div className={s.numberOfComments}></div>
                {[...Array(15)].map( el => (
                    <div className={s.comment}>
                        <div className={s.commentAva}></div>
                        <div className={s.commentAbout}>
                            <div className={s.commentName}></div>
                            <div className={s.commentText1}></div>
                            <div className={s.commentText2}></div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    if (type == "home") return <HomeScreenVideosSkelletone/>
    if (type == "inline") return <NextVideosSkelletone/>
    if (type == "infoVideo") return <VideoDescription/>
    if (type == "comments") return <Comments/>
    return <HomeScreenVideosSkelletone/>
}
export default Skelletone;
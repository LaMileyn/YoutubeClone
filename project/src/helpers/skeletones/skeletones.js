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
    return <HomeScreenVideosSkelletone/>
}
export default Skelletone;
import React from "react";
import s from './header.module.css'
import Youtube from '@files/icons/youtube.png'
import profile from "@files/photos/photo1.jpg"
const Header = (props) => {
    return (
        <>
            <header>
                <div className={s.container}>
                    <div className={s.start}>
                        <div className={s.burger} onClick={() => props.handleToggle()}>
                            <span className="material-icons-sharp">menu</span>
                        </div>
                        <div className={s.logo}>
                            <img src={Youtube} alt=""/>
                            <h2>Youtube</h2>
                        </div>
                    </div>
                    <div className={s.center}>
                        <form action="">
                            <div className={s.input_container}>
                            <input type="text" className={s.input} placeholder="Search"/>
                            <div className={s.virtual_keyboard}>
                                <span className="material-icons-sharp">keyboard</span>
                            </div>
                            <div className={s.erasor}>
                                <span className="material-icons-sharp">close</span>
                            </div>
                            </div>
                        <div className={s.search_icon}>
                            <span className="material-icons-sharp">search</span>
                        </div>
                        <div className={s.microphone}>
                            <span className="material-icons-sharp">mic</span>
                        </div>
                        </form>

                    </div>
                    <div className={s.end}>
                        <div className={s.buttons}>
                            <div className={s.upload_video}>
                                <span className="material-icons-outlined">file_upload</span>
                            </div>
                            <div className={s.grid_button}>
                                <span className="material-icons-sharp">apps</span>
                            </div>
                            <div className={s.notifications}>
                                <span className="material-icons-sharp">notifications</span>
                            </div>
                            <div className={s.profile}>
                                <div className={s.photo}>
                                    <img src={profile} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;
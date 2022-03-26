import React, {useContext, useEffect, useState} from "react";
import s from './header.module.css'
import Youtube from '@files/icons/youtube.png'
import profile from "@files/photos/photo1.jpg"
import {useSelector} from "react-redux";
import {ThemeContext} from "../../Context/Context";
import {useNavigate} from "react-router-dom";

const Header = (props) => {
    const {theme, changeTheme} = useContext(ThemeContext)
    const [openedSwitchDiv, setOpenedSwitchDiv] = useState(false)
    const [visibleMenu, setVisibleMenu] = useState(false)
    const photo = useSelector(state => state.authReducer.user?.photoURL)
    const name = useSelector(state => state.authReducer.user?.name)
    const [value,setValue] = useState("")
    const change = () =>{
        console.log(visibleMenu)
        setVisibleMenu(prev => !prev)
    }
    const history = useNavigate()
    const handleSubmit = (e) =>{
        e.preventDefault();
        history(`/search/${value}`);

    }
    const inputEvent = (e) =>{
        if(e.code == "Enter"){
            history(`/search/${value}`);
        }
    }

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
                        <form action="" onSubmit={handleSubmit}>
                            <div className={s.input_container}>
                                <input type="text" className={s.input} value={value} onKeyDown={inputEvent} onChange={ e => setValue(e.target.value)} placeholder="Search"/>
                                <div className={s.virtual_keyboard}>
                                    <span className="material-icons-sharp">keyboard</span>
                                </div>
                                <div className={s.erasor}>
                                    <span className="material-icons-sharp">close</span>
                                </div>
                            </div>
                            <button type="submit" className={s.search_icon} onClick={handleSubmit}>
                                <span className="material-icons-sharp">search</span>
                            </button>
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
                            <div className={s.profile} >
                                <div className={s.photo}>
                                    {
                                        photo
                                            ? <img src={photo} onClick={change}  alt=""/>
                                            : <img src={profile} alt=""/>
                                    }
                                    {
                                        visibleMenu == true && (
                                            <div className={s.menu}>
                                                {
                                                    openedSwitchDiv
                                                        ? (
                                                            <div className={s.switch_theme}>
                                                                <div className={s.title}>
                                                            <span className="material-icons-outlined"
                                                                  onClick={() => setOpenedSwitchDiv(false)}>arrow_back</span>
                                                                    Theme
                                                                </div>
                                                                <div className={s.themes}>
                                                                    <div className={s.theme} onClick={() => changeTheme('light')}>
                                                                <span className="material-icons-outlined"
                                                                      style={{
                                                                          opacity : theme == "light" ? 1 : 0
                                                                      }}>done</span>
                                                                        <span>Light</span>
                                                                    </div>
                                                                    <div className={s.theme} onClick={() => changeTheme('dark')}>
                                                                <span className="material-icons-outlined"
                                                                      style={{
                                                                          opacity : theme == "dark" ? 1 : 0
                                                                      }}>done</span>
                                                                        <span>Dark</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                        : (
                                                            <>
                                                                <div className={s.menu_profile}>
                                                                    <div className={s.menu_profile_left}>
                                                                        {
                                                                            photo
                                                                                ? <img src={photo} alt=""/>
                                                                                : <img src={profile} alt=""/>
                                                                        }
                                                                    </div>
                                                                    <div className={s.menu_profile_right}>
                                                                        <h3>{name && name}</h3>
                                                                    </div>
                                                                </div>
                                                                <div className={s.theme} onClick={() => setOpenedSwitchDiv(true)}>
                                                                    <span className="material-icons-outlined">mode_night</span>
                                                                    <span>Theme: <span>{theme}</span><span
                                                                        className="material-icons-outlined">chevron_right</span></span>
                                                                </div>
                                                            </>
                                                        )
                                                }

                                            </div>
                                        )
                                    }
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
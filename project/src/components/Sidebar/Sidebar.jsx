import React from "react";

import s from './sidebar.module.css'
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logout} from "@redux/thunks/thunks";

const Sidebar = (props) => {

    const dispatch = useDispatch()
    const signOut = () =>{
        dispatch(logout())
    }

    return (
        <aside className={ props.sideBar ? `${s.active}` : ``}>
            <nav className={s.nav}>
                <NavLink to="/" className={(navdata) => navdata.isActive? `${s.link} ${s.active}`: `${s.link}`}>
                    <span className="material-icons-sharp">home</span>
                    <h3>Home</h3>
                </NavLink>
                <NavLink to="/subscriptions" className={(navdata) => navdata.isActive? `${s.link} ${s.active}`: `${s.link}`}>
                    <span className="material-icons-sharp">subscriptions</span>
                    <h3>Subscriptions</h3>
                </NavLink>
                <NavLink to="/history" className={(navdata) => navdata.isActive? `${s.link} ${s.active}`: `${s.link}`}>
                    <span className="material-icons-sharp">history</span>
                    <h3>Liked</h3>
                </NavLink>
                <NavLink to="/library_books" className={(navdata) => navdata.isActive? `${s.link} ${s.active}`: `${s.link}`}>
                    <span className="material-icons-sharp">library_books</span>
                    <h3>Library</h3>
                </NavLink>
                <NavLink onClick={signOut} to="/logout" className={(navdata) => navdata.isActive? `${s.link} ${s.active}`: `${s.link}`}>
                    <span className="material-icons-sharp">logout</span>
                    <h3>Log out</h3>
                </NavLink>
            </nav>
        </aside>
    )
}

export default Sidebar;
import React, {useEffect} from "react";
import s from './login.module.css'
import youtube from "@files/icons/youtube.png"
import {useDispatch, useSelector} from "react-redux";
import {login} from "@redux/thunks/thunks";
import {useNavigate} from "react-router-dom";

const Login = () =>{
    const dispatch = useDispatch()
    const history = useNavigate()
    const accessToken = useSelector( state => state.authReducer.accessToken)
    useEffect(()=>{
        if( accessToken) history("/")
    },[accessToken,history])

    const handleFunction = (event) =>{
        event.preventDefault()
        dispatch(login())
    }

    return (
        <>
            <div className={s.container_login}>
                <form action="">
                    <div className={s.form_left}>
                        <div className={s.logotype}>
                            <img src={youtube} alt=""/>
                        </div>
                        <div className={s.title}><h1>Youtube</h1></div>
                    </div>
                    <div className={s.form_right}>
                        <div className={s.form_fields}>
                            <button onClick = {handleFunction} >Sign in</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Login;
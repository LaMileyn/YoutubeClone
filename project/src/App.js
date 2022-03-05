import React, {useEffect, useState} from "react";
import Header from "@components/Header";
import "./variables.css"
import "./index.css"
import Sidebar from "@components/Sidebar";
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import HomesScreen from "@components/HomeScreen";
import Login from "@components/Login";
import {useSelector} from "react-redux";


// NOT FOR THE DETAIL VIEW SCREEN

const Layout = ({children}) =>{

    const [sideBar,toggleSideBar] = useState(false)
    const handleToggle = () =>{
        toggleSideBar( val => !val )
    }
    return(
        <>
            <Header handleToggle = {handleToggle}/>
            <div className="container">
                <Sidebar
                sideBar = {sideBar}
                handleToggle = {handleToggle}
                />
                <main className="main" style={  sideBar ? {marginLeft: '230px'} : {marginLeft: '90px'}  }>
                    {children}
                </main>
            </div>
        </>
    )
}

const App = () => {

    const history = useNavigate()
    const { accessToken, loading } = useSelector( state => state.authReducer)
    useEffect(()=>{
        if (!loading && !accessToken) history("/auth")
    },[history,loading,accessToken])

    return(
            <Routes>
                <Route path="/" exact element = {
                    <Layout>
                        <HomesScreen/>
                    </Layout>
                }>
                </Route>
                <Route path="/auth" element = {
                    <Login/>
                }>
                </Route>
                <Route path="/search" element = {
                    <Layout>
                        <div><h1>Search results</h1></div>
                    </Layout>
                }>
                </Route>
                <Route path="*" element = {<Navigate to = "/" replace/>}>
                </Route>
            </Routes>
    )
}
export default App;
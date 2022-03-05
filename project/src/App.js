import React, {useState} from "react";
import Header from "@components/Header";
import "./variables.css"
import "./index.css"
import Sidebar from "@components/Sidebar";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import HomesScreen from "@components/HomeScreen";

const Layout = ({children}) =>{

    const [sideBar,toggleSideBar] = useState(false)
    const [marginNo,setMarginNo] = useState()
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
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element = {
                    <Layout>
                        <HomesScreen/>
                    </Layout>
                }>
                </Route>
                <Route path="/auth" element = {
                    <div>Login Screen</div>
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
        </BrowserRouter>
    )
}
export default App;
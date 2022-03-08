import React, {useEffect} from 'react';
import s from './homescreen.module.css'
import CategorysBar from "@components/Categorys";
import VideosCategory from "@components/VideosCategory";

const HomesScreen = () =>{

    return (
        <>
            <CategorysBar/>
            <VideosCategory/>
        </>
    )
}
export default HomesScreen;
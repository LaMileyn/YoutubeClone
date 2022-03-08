import React, {useState} from 'react';
import s from './categorys.module.css'
import {useDispatch} from "react-redux";
import {getPopularVideos, getPopularVideosByCategory} from "../../redux/thunks/thunks";

const CategorysBar = () => {
    const [value, setValue] = useState("All")
    const categorys = ["All", "React js", "Angular js", "React Native", "use of API", "Redux", "Misux", "Alogithm Art", "Guitar"]
    const dispatch = useDispatch()
    const categoryHandler = valueCurr => {
        setValue(valueCurr);
        if (value === "All") {
            dispatch(getPopularVideos())
        } else {
            dispatch(getPopularVideosByCategory(valueCurr))
        }
    }

    return (
        <div className={s.container_categorys}>
            <div className={s.container_wrapper_categorys}>
                <div className={s.categorys}>
                    {categorys.map((el, index) => <button
                        key={index}
                        className={value == el ? `${s.category} ${s.active}` : `${s.category}`}
                        onClick={() => categoryHandler(el)}
                    ><h3>{el}</h3></button>)}
                </div>
            </div>
        </div>
    )
}
export default CategorysBar;
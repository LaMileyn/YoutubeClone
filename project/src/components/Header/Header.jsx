import React from "react";
import s from './_header_module.css'

const Header = () =>{
    return (
        <>
            <header>
                <div className={s.container}>
                    <div className={s.start}>
                        <div className={s.burder}>
                            <span className="material-icons-sharp">menu</span>
                        </div>
                        <div className={s.logo}></div>
                    </div>
                    <div className={s.center}>
                        <div className={s.input_container}>
                            <input type="text"/>
                            <div className={s.input}>
                                <input type="text"/>
                            </div>
                            <div className={s.search_icon}>
                                <span className="material-icons-sharp">search</span>
                            </div>
                        </div>
                    </div>
                    <div className={s.end}></div>
                </div>
            </header>
        </>
    )
}
export default  Header;
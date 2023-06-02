import React, {Suspense, useContext, useState} from 'react';
import "./styles/index.scss"
import {NavLink, Route, Routes} from "react-router-dom";
import {AboutLazy} from "./pages/About/About.lazy";
import {HomeLazy} from "./pages/Home/Home.lazy";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";



const App = () => {
const {theme,changeTheme} = useTheme()
    console.log(theme)

    return (
        <div className={classNames('app', {hovered: true, selected: false}, [theme, "cls2", 'cls3'])}>
            <button onClick={changeTheme}>Change theme</button>
            <NavLink to={'/'}>
                Home
            </NavLink>
            <NavLink to={'/about'}>
                About
            </NavLink>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutLazy/>} />
                    <Route path={'/'} element={<HomeLazy />} />
                </Routes>
            </Suspense>

        </div>
    );
};

export default App;
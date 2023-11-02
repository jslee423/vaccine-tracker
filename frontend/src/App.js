import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom"
let Home = lazy(() => import("./pages/Home"))
let About = lazy(() => import("./pages/About"))
let LoginSignup = lazy(() => import("./pages/LoginSignup"))
let NotFound = lazy(() => import("./pages/NotFound"));
let LoginForm = lazy(() => import("./components/LoginForm"));
let SignupForm  = lazy(() => import("./components/SignupForm"));
import './App.scss'

const App = () =>{
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/loginSignup' element={<LoginSignup />}>
                    <Route path="" element={<Navigate to="login"/>} />
                    <Route path="login" element={<LoginForm />} />
                    <Route path="signup" element={<SignupForm />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default App
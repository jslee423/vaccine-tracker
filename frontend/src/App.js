import React from "react";
import { Routes, Route } from "react-router-dom"

const App = () =>{
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<h1>home page</h1>} />
            </Routes>
        </div>
    )
}

export default App
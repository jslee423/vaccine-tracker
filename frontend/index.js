import React, { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './src/App'
import Navbar from './src/components/Navbar'

const root = createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Suspense fallback={<h1>is loading...</h1>}>
                <Navbar />
                <App />
            </Suspense>
        </BrowserRouter>
    </React.StrictMode>
)
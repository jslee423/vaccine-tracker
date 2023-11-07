import React, { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './src/components/Navbar'
import { Provider } from 'react-redux'
import store from './src/state/store'
import App from './src/App'

const root = createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Suspense fallback={<h1>is loading...</h1>}>
                    <Navbar />
                    <App />
                </Suspense>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
)
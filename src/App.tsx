import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/homepags'

const App = () => {
    return (

        <React.Fragment>
            <Router>
                <Routes>
                    <Route path='/' element={<Homepage />} />
                </Routes>
            </Router>

        </React.Fragment>

    )
}

export default App
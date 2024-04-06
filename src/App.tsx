import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Headernav from './components/headercomp/headernav'
import Sidenav from './components/sidenavcomp/sidenav'


const App = () => {
    return (

        <React.Fragment>
            <Router>
                <Routes>
                    <Route path='/' element={<Headernav />} />
                    <Route path='/sidenav' element={<Sidenav />} />
                </Routes>
            </Router>

        </React.Fragment>

    )
}

export default App
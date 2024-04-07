import React from 'react'
import Headernav from '../components/headercomp/headernav'
import Sidenav from '../components/sidenavcomp/sidenav'
import Payments from '../components/paymentcomp/payments'

const Homepage = () => {

    return (
        <React.Fragment>
            <div>
                <Headernav />
            </div>
            <div className=' w-full h-screen flex justify-between relative'>
                <div className='w-2/12 h-full relative'>
                    <Sidenav />
                </div>
                <div className='w-9/12 h-fit mx-5 relative'>
                    <Payments />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Homepage
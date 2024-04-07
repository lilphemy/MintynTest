import React from 'react'
import Headernav from '../components/headercomp/headernav'
import Sidenav from '../components/sidenavcomp/sidenav'
import Payments from '../components/paymentcomp/payments'
import Statistics from '../components/statisticstrend/statistics'

const Homepage = () => {

    return (
        <React.Fragment>
            <div>
                <Headernav />
            </div>
            <div className=' w-full h-full flex justify-between mb-5'>
                <div className='w-2/12 h-screen'>
                    <Sidenav />
                </div>
                <div className='w-9/12 h-fit mx-5'>
                    <Statistics/>
                    <Payments />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Homepage
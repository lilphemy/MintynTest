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
            <div className=' w-full flex justify-between mb-5 relative'>
                <Sidenav />
                
                <div className='w-9/12 h-fit ml-80 relative'>
                    <Statistics />
                    <Payments />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Homepage
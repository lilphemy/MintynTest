import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faWallet, } from '@fortawesome/free-solid-svg-icons/faWallet';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';


const Sidenav = () => {

    return (
        <React.Fragment>
            <div className='shadow-lg w-full h-full'>
                <button type="button" className='mx-10 my-10 bg-green-400 font-sans text-sm p-3 rounded-xl text-white font-semibold'> GENERATE INVOICE</button>
                <div className="">
                    <div className=''>
                        <h4 className='mx-10 my-5'>Main</h4>
                        <ul>
                            <li className='w-full hover:bg-blue-100 my-5 font-mono text-sm py-2'><Link to="/"><FontAwesomeIcon className='text-blue-200 mx-10' icon={faMoneyBill} />Overview</Link></li>
                        </ul>
                    </div>
                    <div className=''>
                        <h4 className='mx-10 my-5'>Payments</h4>
                        <ul>
                            <li className='w-full hover:bg-blue-100 my-5 font-mono text-xs py-2'><Link to="/"><FontAwesomeIcon className='text-blue-200 mx-10' icon={faMoneyBill} />All Payments</Link></li>
                            <li className='w-full hover:bg-blue-100 my-5 font-mono text-xs py-2'><Link to="/"><FontAwesomeIcon className='text-blue-200 mx-10' icon={faMoneyBill} />Reconciled Payments</Link></li>
                            <li className='w-full hover:bg-blue-100 my-5 font-mono text-xs py-2'><Link to="/"><FontAwesomeIcon className='text-blue-200 mx-10' icon={faMoneyBill} />Un-Reconciled Payments</Link></li>
                            <li className='w-full hover:bg-blue-100 my-5 font-mono text-xs py-2'><Link to="/"><FontAwesomeIcon className='text-blue-200 mx-10' icon={faMoneyBill} />Manual Settlement</Link></li>
                        </ul>
                    </div>
                    <div className=''>
                        <h4 className='mx-10 my-5'>Orders</h4>
                        <ul>
                            <li className='w-full hover:bg-blue-100 my-5 font-mono text-xs py-2'><Link to="/"><FontAwesomeIcon className='text-blue-200 mx-10' icon={faMoneyBill} />All Orders</Link></li>
                            <li className='w-full hover:bg-blue-100 my-5 font-mono text-xs py-2'><Link to="/"><FontAwesomeIcon className='text-blue-200 mx-10' icon={faMoneyBill} />Pending Orders</Link></li>
                            <li className='w-full hover:bg-blue-100 my-5 font-mono text-xs py-2'><Link to="/"><FontAwesomeIcon className='text-blue-200 mx-10' icon={faMoneyBill} />Reconciled Orders</Link></li>
                            <li className='w-full hover:bg-blue-100 my-5 font-mono text-xs py-2'><Link to="/"><FontAwesomeIcon className='text-blue-200 mx-10' icon={faMoneyBill} />Manual Settlement</Link></li>
                        </ul>
                    </div>

                </div>
                <div>
                    <span className='w-full hover:bg-blue-100 my-8 font-mono text-xs py-2'><Link to="/"><FontAwesomeIcon className='text-blue-200 mx-10' icon={faUser} />Manual Settlement</Link></span>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Sidenav
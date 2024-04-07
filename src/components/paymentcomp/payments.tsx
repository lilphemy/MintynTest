import React, { useState, useEffect } from 'react'
import { nameData } from "../../services/dummydata"
import { wholeType } from '../../services/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

//const pageView = 10;


const Payments = ():JSX.Element => {

    const [setupInfo, setSetupInfo] = useState({
        mainData: nameData,
        smallView: null,
        currentPage: 1,
        startCount: 0,
        endCount: 10,
        //arrlenght: this.mainData.length()
    })

    function handleNext () {
        if(setupInfo.currentPage >= 1 && !(setupInfo.currentPage < 1)){
            setSetupInfo((prev) => {
                return {...prev, startCount: setupInfo.startCount + 10, endCount: setupInfo.endCount + 10, currentPage: setupInfo.currentPage + 1}
            })
        }else{
             setSetupInfo({...setupInfo,  })
        }
        console.log(setupInfo.startCount, setupInfo.endCount)
    }

    function handlePrev () {
        if(setupInfo.startCount >= 0 && setupInfo.endCount <= setupInfo.mainData.length) {
            setSetupInfo((prev) => {
                return {...prev, endCount: setupInfo.endCount - 10, startCount: setupInfo.startCount - 10, currentPage: setupInfo.currentPage - 1}
            })
        }
    }

    function pageRenderer (startValue:number, endValue:number) {
        let newView = nameData.slice(startValue, endValue)
        setSetupInfo({...setupInfo, smallView: newView})
    }

    useEffect(() => {
        pageRenderer(setupInfo.startCount, setupInfo.endCount)
    }, [setupInfo.startCount, setupInfo.endCount])

    
    return (
        <React.Fragment>
            <section className='right-0 w-10/12 mx-10 my-5'>
                <h2 className='text-3xl font-bold my-5'>Payments</h2>
                <div className="w-full flex justify-between">
                    <label>
                        <span>showing</span>
                        <select>
                            <option>20</option>
                            <option>40</option>
                            <option>80</option>
                            <option>100</option>
                            <option>150</option>
                        </select>
                        <span>out of 500 payments.</span>
                    </label>
                    <input type='search' placeholder='Search Payments' />

                    <label>
                        <span>show</span>
                        <select>
                            <option>All</option>
                            <option>Reconciled</option>
                            <option>UN-reconciled</option>
                            <option>Settled</option>
                            <option>Unsettled</option>
                        </select>
                    </label>
                </div>

                <table className='w-full my-5'>
                    <thead className='my-5 '>
                        <tr className='text-left text-md uppercase'>
                            <th className='py-3 px-1 bg-gray-300'>item type</th>
                            <th className='py-3 px-1 bg-gray-300'>Price</th>
                            <th className='py-3 px-1 bg-gray-300'>trans. No</th>
                            <th className='py-3 px-1 bg-gray-300'>time</th>
                            <th className='py-3 px-1 bg-gray-300'>status</th>
                            <th className='py-3 px-1 bg-gray-300'></th>
                        </tr>

                    </thead>

                    <tbody>
                        {setupInfo.smallView?.map((unitdata: wholeType) => {
                            const { id, profile: { dob, name, company, location } } = unitdata;
                            let dateTime = new Date(dob)

                            return (
                                <React.Fragment>
                                    <tr key={id} className='centre border-2 border-slate-300'>
                                        <td className='py-2 '>{name}</td>
                                        <td className='py-2 '>{location.lat}</td>
                                        <td className='py-2 '>{ location.long}</td>
                                        <td className='py-2 '>{dateTime.getFullYear()}</td>
                                        <td className='py-2 '>{company}</td>
                                        <td className='py-2 '><FontAwesomeIcon icon = {faCaretDown}/></td>
                                    </tr>
                                </React.Fragment>
                            )
                        })}
                    </tbody>

                    <tfoot>

                    </tfoot>

                </table>

                <div className='flex justify-between my-5'>
                    <div>{`showing ${setupInfo.startCount} to ${setupInfo.endCount} of ${nameData.length} entries`}</div>
                    <div>
                        <button onClick={handlePrev}>Previous</button>
                        <button onClick={handleNext}>Next</button>
                    </div>
                </div>

            </section>
        </React.Fragment>
    )
}

export default Payments
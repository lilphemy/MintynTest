import React from 'react'

const payments = () => {
  return (
    <React.Fragment>
        <section className='w-full ml-5'>
            <h2>Payments</h2>
            <div className = "w-full flex justify-between">
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
                <input type='search' placeholder='Search Payments'/>

                <label>
                    <span>show</span>
                    <select>
                        <option>All</option>
                        <option>Reconciled</option>
                        <option>U-reconciled</option>
                        <option>Settled</option>
                        <option>Unsettled</option>
                    </select>
                </label>
            </div>
        </section>
    </React.Fragment>
  )
}

export default payments
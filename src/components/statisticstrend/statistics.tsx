import React from 'react'
import Plot from 'react-plotly.js'
import Plotly from 'plotly.js'
import Headerstat from './headerstat'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons/faArrowCircleLeft'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'


type PlotData = {
  x: string[],
  y: number[],
  fill: string,
  type: string,
  mode: string,
  name: string,
}[]

type PlotLayout = {
  title: string,
  xaxis: {
    title: string,
  },
  yaxis: {
    title: string,
  },
  width: number,
  height: number,
}

const Statistics: React.FC = () => {

  const xBox = ["jan", "feb", "march", "april", "may"];
  const yBox = [[400, 500, 100, 120, 330,], [300, 420, 510, 230, 200], [600, 300, 100, 440, 320], [200, 300, 200, 300, 500]];

  const data: Plotly.Data[] = yBox.map((units, index) => {
    return {
      x: xBox,
      y: units,
      type: "scatter",
      mode: "none",
      fill: "tozeroy",
      name: `Dataset ${index + 1}`,
    }
  })

  const layout: PlotLayout = {
    title: "sales value chart",
    xaxis: { title: " months of sales" },
    yaxis: { title: "values of sales" },
    width: 800,
    height: 400,
  }

  //const layout: PlotLayout = { width: 900, height: 500, title: "sales revenue during the month" }

  // const layout:PlotLayout = {
  //   title: "Area chart on revenue",
  //   xaxis: {
  //     title: "X axis",
  //   },
  //   yaxis: {
  //     title: "Y Axis"
  //   }
  // }


  return (
    <React.Fragment>
      <div>
        <Headerstat />
        <div className='flex w-full'>
          <div className='w-11/12 flex flex-col'>
            < div className='flex w-full justify-between' >
              <h2 className='font-bold text-xl'>Today: 7 march, 2024</h2>
              <div>
                <select className='outline-none border-2 border-blue-500 font-mono text-lg bg-indigo-200 rounded-lg w-32 text-'>
                  <option>first</option>
                  <option>second</option>
                  <option>third</option>
                  <option>fourth</option>
                </select>
              </div>
              <div className='flex'>
                <FontAwesomeIcon className="mx-1 text-lg border-2 border-slate-300 text-slate-300 w-12 p-2" icon={faArrowCircleLeft} />
                <FontAwesomeIcon className="mx-1 text-lg border-2 border-slate-300 text-slate-300 w-12 p-2" icon={faArrowCircleRight} />
              </div>
            </div >
            <Plot className = "mx-10" data={data} layout={layout} />
          </div>
          <div className='flex flex-col justify-between w-full ml-5'>
            <div className='bg-white shadow-md h-48 bg-slate-200 w-full flex flex-col px-5 py-1'>
              <label htmlFor="file" className='font-bold text-xl my-1'>Order</label>
              <progress className="w-11/12 my-1 h-2" value={80} max={100}></progress>
              <p className='font-sans py-1'>Pending Orders: 20</p>
              <p className='font-sans py-1'>Reconciled Orders: 80</p>
              <p className='font-sans py-1'>Total Orders: 100</p>
            </div>
            <div className='bg-white shadow-md h-48 bg-slate-200 w-full flex flex-col px-5 py-1'>
              <label htmlFor="file" className='font-bold text-xl my-1'>Payments</label>
              <progress className="w-11/12 my-1 h-2" value={80} max={100}></progress>
              <p className='font-sans py-1'>Pending Payments: 20</p>
              <p className='font-sans py-1'>Reconciled Payments: 80</p>
              <p className='font-sans py-1'>Total Payments: 100</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>


  )
}

export default Statistics

//[[400, 500, 100, 120, 330,], [300, 420, 510, 230, 200], [600, 300, 100, 440, 320], [200, 300, 200, 300, 500]]




import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTornado } from '@fortawesome/free-solid-svg-icons/faTornado'

const Headerstat = () => {
  return (
    <div className='flex justify-between'>
        <div className='flex w-60 h-32 shadow-lg bg-white centre my-8 rounded-xl content-center justify-center py-10'>
            <div className='flex flex-col w-3/4  content-center justify-center'>
                <h4 className='text-md font-mono text-xs text-slate-500'>Daily Transaction volume</h4>
                <h1 className='text-extralbold text-2xl text-sans text-slate-900'>2,342</h1>
            </div>
            <FontAwesomeIcon className = "text-center text-3xl text-blue-400" icon={faTornado} />
        </div>
        <div className='flex w-60 h-32 shadow-lg bg-white centre my-8 rounded-xl content-center justify-center py-10'>
            <div className='flex flex-col w-3/4  content-center justify-center'>
                <h4 className='text-md font-mono text-xs text-slate-500'>Daily Transaction volume</h4>
                <h1 className='text-extralbold text-2xl text-sans text-slate-900'>40000</h1>
            </div>
            <FontAwesomeIcon className = "text-center text-3xl text-blue-400" icon={faTornado} />
        </div>
        <div className='flex w-60 h-32 shadow-lg bg-white centre my-8 rounded-xl content-center justify-center py-10'>
            <div className='flex flex-col w-3/4  content-center justify-center'>
                <h4 className='text-md font-mono text-xs text-slate-500'>Daily Transaction volume</h4>
                <h1 className='text-extralbold text-2xl text-sans text-slate-900'>25000</h1>
            </div>
            <FontAwesomeIcon className = "text-center text-3xl text-blue-400" icon={faTornado} />
        </div>
        <div className='flex w-60 h-32 shadow-lg bg-white centre my-8 rounded-xl content-center justify-center py-10'>
            <div className='flex flex-col w-3/4  content-center justify-center'>
                <h4 className='text-md font-mono text-xs text-slate-500'>Daily Transaction volume</h4>
                <h1 className='text-extralbold text-2xl text-sans text-slate-900'>100000</h1>
            </div>
            <FontAwesomeIcon className = "text-center text-3xl text-blue-400" icon={faTornado} />
        </div>
    </div>
  )
}

export default Headerstat
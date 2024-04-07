


const Headernav = () => {
  return (
    <nav className = " py-5 bg-white-400 flex flex-row justify-between shadow-lg">
        <h1 className='text-blue-600 text-3xl font-bold font-mono'>TransMonitor</h1>
        <div>
            <input type="search" name="search" id="" placeholder={` search here`} />
        </div>
        <div className='flex w-52 justify-between'>
            <h3>support</h3>
            <h3>FAQ</h3>
            <span><i>bell icon</i></span>
            <div>
                <h3></h3>
                <img src="" alt="" />
            </div>
        </div>
    </nav>
  )
}

export default Headernav
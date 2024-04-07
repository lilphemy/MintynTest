
import { faUserAlt } from "@fortawesome/free-solid-svg-icons/faUserAlt"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const Headernav = () => {
  return (
    <nav className=" py-5 bg-white-400 flex flex-row justify-between shadow-lg">
      <h1 className='text-blue-600 text-3xl font-bold font-mono mx-5'>TransMonitor</h1>
      <div>
        <input type="search" name="search" id="" placeholder={` search here`} />
      </div>
      <div className='flex w-72 justify-between'>
        <h3>support</h3>
        <h3>FAQ</h3>
        <div className="flex">
          <div className="flex flex-col w-fit">
            <h3>Hello</h3>
            <h3>Zorro</h3>
          </div>
          <FontAwesomeIcon className="text-2xl text-red-300 w-16" icon={faUserAlt} />
        </div>
      </div>
    </nav>
  )
}

export default Headernav
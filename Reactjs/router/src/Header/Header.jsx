import {NavLink,Link} from "react-router-dom"
export default function Header(){
  return(
    <div className="bg-black  shadow-2xl w-full fixed top-0 left-0 p-2 ">
      <div className="flex justify-between items-center  ">
        <div className="w-full flex flex-grow-1">
        <div className="text-white font-extralight font-mono">
          <Link>C O D E R A F R O J</Link>
        </div>
        </div>
        <div className="flex gap-8 w-full">
          <NavLink to="/" className={({isActive})=>`${isActive ? "text-orange-700":"text-gray-600"}`}>Home</NavLink>
            <NavLink to="/about" className={({isActive})=>`${isActive ?"text-orange-700": "text-gray-600"}`}>About</NavLink>
              <NavLink to="/github" className={({isActive})=>`${isActive ? "text-orange-700":"text-gray-600"}`}>Github</NavLink>
        </div>
      </div>
    </div>
    )
}
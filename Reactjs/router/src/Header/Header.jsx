import {NavLink} from "react-router-dom"
export default function Header(){
  return(
    <div className="bg-white shadow-2xl w-full fixed top-0 left-0 p-2">
      <div className="flex justify-between items-center ">
        <div>
        <div className="text-orange-950 font-extralight">C O D E R I N N U</div>
        </div>
        <div className="flex gap-8">
          <NavLink to="/" className={({isActive})=>`${isActive ? "text-orange-700":"text-gray-600"}`}>Home</NavLink>
            <NavLink to="/about" className={({isActive})=>`${isActive ?"text-orange-700": "text-gray-600"}`}>About</NavLink>
              <NavLink to="/github" className={({isActive})=>`${isActive ? "text-orange-700":"text-gray-600"}`}>Github</NavLink>
        </div>
      </div>
    </div>
    )
}
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from "./Home/Home"
import About from "./About/About"
import Github,{loader} from "./Github/Github"
const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"About",
        element:<About/>
      },
      {
        path:"github",
        element:<Github/>,
        loader:loader
        
        
      }
    ]
  }
  ])

createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}/>
)

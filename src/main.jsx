import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import vehicles from './data/vehicles.js'
import VehicleView from './views/VehicleView.jsx'

const routes = [
  {
    path: "/",
    element: <App/>
  }
]

vehicles.forEach(vehicle => {
  routes.push({
    path: vehicle.name,
    element: <VehicleView vehicle={vehicle}/>,
  })
})

const router = createBrowserRouter(routes) // metodo de rutas de la biblioteca de js 

ReactDOM.createRoot(document.getElementById('root')).render( //createRoot recibe el elemento donde se quiere renderizar el proyecto, se dice que renderizar 
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)

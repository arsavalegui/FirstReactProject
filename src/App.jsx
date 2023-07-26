
//componente react 
import './App.css'
import Card from "./components/Card"
import vehicles from './data/vehicles'
import ShowHide from './components/ShowHide'

function App() {
  const vehicleList = vehicles.map(vehicle => {
    return <Card title={vehicle.name} description={vehicle.description} />
  })

  return (
    <div className='App'>
      <h1>Galeria de vehiculos</h1>

      <div className='container'>
        {vehicleList}
      </div>

      <ShowHide/>

    </div>
  )
}

export default App

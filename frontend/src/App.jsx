import GoogleMapComponent from "./components/GoogleMapComponent"
import SatelliteImageComponent from "./components/SatelliteImageComponent"
import WeatherComponent from "./components/WeatherComponent"

function App() {

  return (
    <>
    <h1>Disaster Preparedness Application</h1>
    <SatelliteImageComponent />
    <GoogleMapComponent />
    <WeatherComponent />
 </>
  )
}

export default App

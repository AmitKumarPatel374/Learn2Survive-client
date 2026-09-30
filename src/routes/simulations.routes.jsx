
import { Route, Routes } from 'react-router-dom'
import SimulationsHomePage from '../pages/simulations/SimulationsHomePage'

function SimulationsRoutes() {
  return (
    <>
        <Routes>
            <Route path="" element= {<SimulationsHomePage/>} />
        </Routes>
    </>
  )
}

export default SimulationsRoutes

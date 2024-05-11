
import React from "react";
import {BrowserRouter, Routes , Route} from "react-router-dom";
import {Landing} from './components/Landing'
const Dashboard = React.lazy(() => import ('./components/Dashboard'))

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/" element={<Landing/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

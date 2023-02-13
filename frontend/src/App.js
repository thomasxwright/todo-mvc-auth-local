import logo from './logo.svg';
import { useState, useEffect } from 'react'
import './App.css'
import { RequireAuth } from './auth/RequireAuth';
import BirdBrowser from './components/BirdBrowser'
// import { Routes, Route } from 'react-router-dom'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Sightings from './components/sightings/Sightings'
import { useScreenModeContext } from './auth/useScreenMode';
import AccountSection from './components/Login/AccountSection';
import Header from './components/Header';

const styling = {
  outer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0px auto',
    narrow: {
      padding: '4px'
    },
    medium: {
      padding: '8px'
    },
    desktop: {
      width: '70%',
      paddingTop: '8px'
    }
  }
}

function App() {
  const screenMode = useScreenModeContext()


  return (
    <div style={{ ...styling.outer, ...styling.outer[screenMode] }}>
      {/* <AccountSection /> */}
      <Header />
      <span>yooo birdz</span>
      <Routes>
        <Route path='/*' element={<BirdBrowser />} />
        <Route path='/browse/*' element={<BirdBrowser />} />
        <Route
          path='/sightings/*'
          element={
            <RequireAuth>
              <Sightings />
            </RequireAuth>
          } />
        <Route path='/game' element={<p>play da game</p>} />
      </Routes>
    </div >
  )
}

export default App
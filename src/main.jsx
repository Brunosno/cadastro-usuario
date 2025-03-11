import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './GlobalStyles.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/index.jsx'
import ListUsers from './pages/ListUsers/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/users' element={<ListUsers />}></Route>
      </Routes>
    </Router>
  </StrictMode>,
)

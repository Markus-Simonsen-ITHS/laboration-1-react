import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import Home from './views/home'
import Fetch from './views/fetch'
import Prop from './views/prop'
import Conevent from './views/conevent'
import Text from './contexts/text'
import UseContext from './views/useContext'
import Form from './views/form'
import Styled from './views/styled'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Text.Provider value="bra sida va" >
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/fetch" element={<Fetch />} />
          <Route path="/prop" element={<Prop />} />
          <Route path="/conevent" element={<Conevent />} />
          <Route path="/useContext" element={<UseContext />} />
          <Route path="/form" element={<Form />} />
          <Route path="/styled" element={<Styled />} />
        </Routes>
      </BrowserRouter>
    </Text.Provider>
  </React.StrictMode>
)

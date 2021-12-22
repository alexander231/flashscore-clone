import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import CountryPage from './components/CountryPage'


ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path=':countryId' element={<CountryPage />}/>
           
            
        </Routes>
    </BrowserRouter>, 
    document.getElementById('root'))
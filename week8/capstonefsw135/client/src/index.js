import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import Provider from "./context/UserProvider"
import App from './App'

ReactDOM.render(
  <BrowserRouter>
  <Provider>
    <App />
    </Provider>
    </BrowserRouter>,
  document.getElementById('root')
)

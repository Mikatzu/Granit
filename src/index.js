import React from "react"
import * as ReactDOMClient from 'react-dom/client'
import App from './App'
import './scss/style.scss'
import './scss/header.scss'
import './scss/main.scss'
import './scss/companyinfo.scss'

const app = ReactDOMClient.createRoot(document.getElementById("app"));

app.render(<App />)

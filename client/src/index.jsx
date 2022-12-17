import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "/src/App.jsx"
import { BrowserRouter } from "react-router-dom"
import "./global.scss"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
)

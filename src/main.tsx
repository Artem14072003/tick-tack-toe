import React from 'react'
import ReactDOM from 'react-dom/client'
import "./assets/style/style.scss"
import Home from "./components/Home/Home";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)

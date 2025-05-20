import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css' // O el nombre de tu archivo CSS principal
import 'katex/dist/katex.min.css'; // Importar estilos de KaTeX

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


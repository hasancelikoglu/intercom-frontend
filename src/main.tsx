import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/global.css'
import 'react-image-crop/dist/ReactCrop.css'
import { Provider } from 'jotai'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
)

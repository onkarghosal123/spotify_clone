import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Album from './pages/Album.jsx'
import Login  from './pages/Login.jsx'
import PlayerProvider from './context/playerContext.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/album/:id",
        element: <Album/>
      },
       {
        path: "/login",
        element: <Login/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PlayerProvider>
      <RouterProvider router={router}/>
    </PlayerProvider>
    
  </StrictMode>,
)

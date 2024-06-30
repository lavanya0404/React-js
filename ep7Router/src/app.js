import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Header from './components/Header'
import Body from './components/Body'
import About from './components/About'
import Contact from './components/Contact'
import ErrorElement from './components/ErrorElement'
// not using any key (not acceptable) <<< index as key <<<<<<<<< unique (best practice)
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  )
}
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement:<ErrorElement/>
  },
  {
    path: '/about',
    element: <About />
  },{
    path :'/contact',
    element: <Contact/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router ={appRouter}/>)

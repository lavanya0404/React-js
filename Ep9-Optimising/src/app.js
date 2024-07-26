import React, { lazy,Suspense } from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter,Outlet } from "react-router-dom"
import Header from "./components/Header"
import Body from "./components/Body"
import About from "./components/About"
import Contact from "./components/Contact"
import RestaurantMenu from "./components/RestaurantMenu"
import ErrorElement from "./components/ErrorElement"
import Grocery from "./components/Grocery";


/*
 - Lazy loading
 - Chunking
 - Code Splitting
 - Dynamic loading
 - On demand loading
*/
const Grocery = lazy(()=>import ("./components/Grocery"));
const About = lazy(()=>import ("./components/About"));
const AppLayout = () => {
  return (
    <div>
      <Header />
      {/* if path is / add body 
      if path is about add about
      if path is contact add contact */}
      <Outlet />
    </div>
  )
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      // :resID is used for Dynamic restaurant identification
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu />,

      },{
        path:"/grocery",
        element : <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
      }
    ],
    errorElement: <ErrorElement />,
  },
])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)

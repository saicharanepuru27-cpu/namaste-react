import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import About from "./About";
import ErrorPage from "./ErroPage";
import Cart from "./Cart";
import Restaurant from "./Restaurant";
const AppLayout = ()=>{
    return(
   <div className="app">
    <Header/>
    <Outlet/>
   </div> 
        
    )
}
const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    children:[
      {
      path:'/about',
      element:<About/>
     },
     {
    path:'/',
    element:<Body/>
     },
     {
      path:'/cart',
      element:<Cart/>
     },
     {
      path:'/restaurant/:resid',
      element:<Restaurant/>
     }

    ],
    errorElement:<ErrorPage/>
  }
  
])
const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(<RouterProvider router={appRouter}/>);

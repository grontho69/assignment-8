import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AllApps from "../Pages/AllApps";
import Installation from './../Pages/Installation';
import Errorpage from "../Pages/Errorpage";
import AppDetails from "../Pages/AppDetails";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
   errorElement:<Errorpage/>,
    children: [
      {
        index: true,
        element: <Home />,
        loader:() => fetch('/appData.json').then(res => res.json())
        
      },
      {
        path: '/all-apps',
        element:<AllApps/>,
      },
      {
        path: '/installation',
        element: <Installation />,
        
      },
      {
path: '/app-details',
        element: <AppDetails />,
        
      }


    ]
}
  
]);

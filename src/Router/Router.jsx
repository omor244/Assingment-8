import { createBrowserRouter } from "react-router";
import MainLayOut from "../Components/MainLayOut/MainLayOut";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import ProductsApps from "../Pages/ProductsApps/ProductsApps";
import Installationpage from "../Pages/Installationpage/Installationpage";
import Details from "../Pages/Detailspage/Details";
import Loading from "../Components/Loading/Loading";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    
    children: [
        {
            index: true,
            element: <Home></Home>
        },
       {
        path: 'apps',
        element: <ProductsApps></ProductsApps>
       },
       {
        path: 'install',
        element: <Installationpage></Installationpage>

       },
       {
        path: '/details/:id',
        element: <Details></Details>
       }
      
    ]
    
  },
  {
        basename: "/Apps",
  }
]);

export default router
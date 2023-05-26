 
 import { createBrowserRouter } from "react-router-dom";
import Form from "../components/Form";
import Hero from "../components/Hero";
import Home from "../components/home";
import ProductDetail from '../components/product-detail';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Hero/>,
    },
    {
      path: "/login",
      element: <Form/>,
    },
   {
    path:"/home",
    element: <Home/>,
   },
   {
    path:"/productDetail",
    element: <ProductDetail/>
   }
    
  ]);

  export default router;
import React from "react";
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import MainLayout from '@layouts/MainLayout/MainLayout';
import Home from "@pages/Home";
import Categories from '@pages/Categories';
import Products from '@pages/Products';
import AboutUs from '@pages/AboutUs';
import Login from "@pages/Login";
import Register from "@pages/Register";
import Error from "@pages/Error";
const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children:[
        {
        index:true,
        element:<Home />
      },
      {
        path:"categories"
        ,element:<Categories />
      },
      {
        path:"categories/products/:prefix",
        element:<Products />,
        loader: ({params}) => {
          if (
            typeof params.prefix !== "string" ||
            !/^[a-z]+$/i.test(params.prefix)
          ) {
            throw new Response("Bad Request", {
              statusText: "Category not found",
              status: 400,
            });
          }
          return true;
        }
      },
      {
        path:"AboutUs"
        ,element:<AboutUs />
      },
      {
        path:"Login"
        ,element:<Login />
      },
      {
        path:"Register"
        ,element:<Register />
      }
      
    ]
    }
  ]);

const AppRouter = () =>{
    return(
        <RouterProvider router={router} />

    );
};
export default AppRouter;
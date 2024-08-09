import { createBrowserRouter } from "react-router-dom";
import { Client } from "./pages/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from "./pages/client/Home";
import { Admin } from "./pages/admin";
import { ChoiceMain } from "./components/admin/Choises/Main";

import Basket from "./components/client/Basket";
import { PopularItemsMain } from "./components/admin/Popular/Main";
import { NewArrivalsMain } from "./components/admin/NewArrivals/Main";
import NotFound from "./pages/NotFound";
import {Signin} from "./pages/admin/signin";
import { CheckAuth } from "./Loaders/admin/Register";
import { Login } from "./components/client/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Client />,
        children: [
            {
                path: "home",
                element: <Home />
            },
            {
                path: "basket", 
                element: <Basket />
            },
            {
                path: "login",
                element: <Login />
            }
        ]
    },
    {
        path: "/admin",
        element: <Admin />,
        loader: CheckAuth,
        children: [
            {
                path: "newarrivals",
                element: <NewArrivalsMain />
            },
            {
                path: "choices",
                element: <ChoiceMain />
            },
            {
                path: "popularitems",
                element: <PopularItemsMain />
            },
        ]
    },
    {
        path: "/admin/signin",
        loader: CheckAuth,
        element: <Signin />,
    },
    {
        path: "*",
        element: <NotFound />
    }
])
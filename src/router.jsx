import { createBrowserRouter } from "react-router-dom";
import { Client } from "./pages/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from "./pages/client/Home";
import { Admin } from "./pages/admin";
import { ChoiceMain } from "./components/admin/Choises/Main";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Client />,
        children: [
            {
                path: "home",
                element: <Home />
            }
        ]
    },
    {
        path: "/admin",
        element: <Admin />,
        children: [
            {
                path: "photos",
                element: <h1>Photos</h1>
            },
            {
                path: "newarrivals",
                element: <h1>New Arrivals</h1>
            },
            {
                path: "choices",
                element: <ChoiceMain />
            },
            {
                path: "popularitems",
                element: <h1>Popular Items</h1>
            }
        ]
    },
    {
        path: "*",
        element: <h1>Not Found</h1>
    }
])
import { createBrowserRouter } from "react-router-dom";
import { Client } from "./pages/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from "./pages/client/Home";

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
    }
])
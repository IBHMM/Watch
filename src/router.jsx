import { createBrowserRouter } from "react-router-dom";
import { Client } from "./pages/client";
import 'bootstrap/dist/css/bootstrap.min.css';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Client />
    }
])
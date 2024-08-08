import { createBrowserRouter } from "react-router-dom";
import { Client } from "./pages/client";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Client />
    }
])
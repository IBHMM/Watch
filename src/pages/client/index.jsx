import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/client/Navbar";

export function Client() {

    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}
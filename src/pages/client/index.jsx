import { Outlet } from "react-router-dom";
import {  NavbarClient } from "../../components/client/Navbar";

export function Client() {

    return (
        <>
            <NavbarClient />
            <Outlet />
        </>
    )
}
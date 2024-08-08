import { Outlet } from 'react-router-dom'
import NavbarAdmin from '../../components/admin/Navbar/AdminNavbar'

export function Admin() {

    return (
        <>
            <NavbarAdmin />
            <Outlet />
        </>
    )
}
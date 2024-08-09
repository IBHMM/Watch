import { Outlet, useLoaderData, useNavigate } from 'react-router-dom'
import NavbarAdmin from '../../components/admin/Navbar/AdminNavbar'
import { useEffect } from 'react';

export function Admin() {

    const loaderdata = useLoaderData();
    const navigate = useNavigate();

    useEffect(() => {
        if (!loaderdata) {
            navigate('/admin/signin', {replace: true});
        }
    }, [loaderdata])
    
    return (
        <>
            <NavbarAdmin />
            <Outlet />
        </>
    )
}
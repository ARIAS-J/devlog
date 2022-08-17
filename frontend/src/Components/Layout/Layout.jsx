import { Navbar, NavbarAdmin } from "../index"
import { useAdminPath } from "../../hooks/useAdminPath"

function Layout({ children }) {
    const isAdminPath = useAdminPath();

    return (
        <>
            {isAdminPath ? <NavbarAdmin /> : <Navbar />}
            {children}
        </>
    )
}

export default Layout
import { matchPath, useLocation } from "react-router-dom";

export const useAdminPath = () => {
    const location = useLocation();
    const path = matchPath({ path: "/admin/*" }, location.pathname);

    return !!path
};

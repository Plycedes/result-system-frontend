import { useContext, createContext } from "react";

export const AdminContext = createContext({
    admin: {},
    createAdmin: () => {},
});

export const useAdmin = () => {
    return useContext(AdminContext);
};

export const AdminProvider = AdminContext.Provider;

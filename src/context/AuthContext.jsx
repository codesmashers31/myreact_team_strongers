import { createContext, useContext } from "react";

export const AuthContext = createContext();
// eslint-disable-next-line react-hooks/rules-of-hooks
export const useAuth = useContext(AuthContext);


import { useState, createContext, useContext, useEffect } from "react";
import axios from "axios";

const initialState = {
    books: [],
    setBooks: () => {},
};

const AuthContext = createContext(initialState);

export const AuthContextProvider = props => {
    const [currentUser, setCurrentUser] = useState({});

    const login = async inputs => {
        const res = await axios.post("/api/auth/login", inputs);
        setCurrentUser(res.data);
    };

    const logout = async () => {
        await axios.post("/api/auth/logout");
        setCurrentUser(null);
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    const contextValue = {
        currentUser,
        login,
        logout,
    };

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);

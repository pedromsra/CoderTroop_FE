import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/global";

import { useSelector } from "react-redux";


import { useAuth } from "../hooks/auth";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {

    const { user } = useAuth();
    const theme = useSelector((state: any) => state.theme);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <BrowserRouter>
                {user ? <AppRoutes /> : <AuthRoutes />}
            </BrowserRouter>
        </ThemeProvider>
    )

}
import React from "react";
import ReactDOM from "react-dom/client";
import {ThemeProvider} from "styled-components";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

import { AuthProvider } from './hooks/auth';

import { Routes } from './routes';

// import { GoogleOAuthProvider } from '@react-oauth/google';



ReactDOM.createRoot(document.getElementById('root')!).render(
  // <GoogleOAuthProvider clientId="128765924500-rptdpdevg92d26nml6jm3iid0q7hkks2.apps.googleusercontent.com">
    <React.StrictMode>
      <ThemeProvider theme = {theme}>
        <GlobalStyles />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </React.StrictMode>
  // </GoogleOAuthProvider>
)
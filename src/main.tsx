import React from "react";
import ReactDOM from "react-dom/client";

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { themeReducer } from './redux/themeReducer';


import { AuthProvider } from './hooks/auth';

import { Routes } from './routes';

// import { GoogleOAuthProvider } from '@react-oauth/google';

const store = createStore(themeReducer);

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <GoogleOAuthProvider clientId="128765924500-rptdpdevg92d26nml6jm3iid0q7hkks2.apps.googleusercontent.com">
    <React.StrictMode>
      <Provider store={store}>
          
          <AuthProvider>
            <Routes />
          </AuthProvider>
      </Provider>
    </React.StrictMode>
  // </GoogleOAuthProvider>
)
"use client";
import React, { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from "@/redux/store";

const ClientProvider = ({children}: {children: ReactNode}) => {
    return (
        <Provider store={store}>
            {children}
            <Toaster/>
            </Provider>
    )
}

export default ClientProvider
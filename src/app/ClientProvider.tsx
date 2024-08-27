"use client";
import React, { ReactNode, useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from "@/redux/store";
import IssueModal from '@/ui/IssueModal';

const ClientProvider = ({children}: {children: ReactNode}) => {

    const [open, setOpen] = useState(() => {
        return localStorage.getItem("issue") !== "true";
    });
    
    return (
        <Provider store={store}>
            {children}
            <Toaster/>
            <IssueModal open={open} setOpen={setOpen} />
        </Provider>
    )
}

export default ClientProvider
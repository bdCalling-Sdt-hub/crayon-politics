"use client";
import React, { ReactNode, useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from "@/redux/store";
import IssueModal from '@/ui/IssueModal';

const ClientProvider = ({children}: {children: ReactNode}) => {
    
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const fetchIssueStatus = async () => {
            try {
                const response = await fetch("http://192.168.10.185:5000/api/v1/voter-issue/is-issue-submit");
                const { data } = await response.json();
    
                if (data === true) {
                    setOpen(false);
                }else{
                    setOpen(true);
                }
            } catch (error) {
                setOpen(true);
            }
        };

        fetchIssueStatus();
    }, []);
    
    return (
        <Provider store={store}>
            {children}
            <Toaster/>
            <IssueModal open={open} setOpen={setOpen} />
        </Provider>
    )
}

export default ClientProvider
"use client";
import React, { ReactNode, useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from "@/redux/store";
import IssueModal from '@/ui/IssueModal';
import { imageUrl } from '@/redux/api/baseApi';
import Banner from '@/ui/home/Banner';
import GoogleAds from '@/ui/GoogleAds';

const ClientProvider = ({children}: {children: ReactNode}) => {
    const [open, setOpen] = useState(false);
    const [openBanner, setOpenBanner] = useState(true);

    useEffect(() => {
        const fetchIssueStatus = async () => {
            try {
                const response = await fetch(`${imageUrl}/api/v1/voter-issue/is-issue-submit`);
                const { data } = await response.json();
    
                if (data === true) {
                    setOpen(false);
                } else {
                    setTimeout(() => {
                        setOpen(true);
                    }, 120000); // 2 minutes = 120000 ms
                }
            } catch (error) {
                setTimeout(() => {
                    setOpen(true);
                }, 120000); // 2 minutes = 120000 ms
            }
        };
    
        fetchIssueStatus();
    }, []);
    

    useEffect(() => {
        const handleScroll = () => {
            setOpenBanner(false);
        };
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setOpenBanner(false);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Provider store={store}>
            {children}
            <Toaster/>
            <IssueModal open={open} setOpen={setOpen} />
            {
                openBanner && (
                    <div
                        className={`banner-container ${openBanner ? '' : 'zoom-out'}`}
                    >
                        <Banner />
                    </div>
                )
            }
        </Provider>
    )
}

export default ClientProvider;
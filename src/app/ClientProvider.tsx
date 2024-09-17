"use client";
import React, { ReactNode, useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from "@/redux/store";
import IssueModal from '@/ui/IssueModal';
import { imageUrl } from '@/redux/api/baseApi';
import 'aos/dist/aos.css';
import AOS from "aos";

const ClientProvider = ({children}: {children: ReactNode}) => {
    const [open, setOpen] = useState(false);
    const [openBanner, setOpenBanner] = useState(true);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

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
            if (openBanner) {
                setOpenBanner(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [openBanner]);


    useEffect(() => {
        const handleTouchMove = () => {
          if (openBanner) {
            setOpenBanner(false);
          }
        };
      
        document.addEventListener('touchmove', handleTouchMove);
      
        return () => {
          document.removeEventListener('touchmove', handleTouchMove);
        };
      }, [openBanner]);

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

            <div style={{display: openBanner ? "block" : "none" }} className='bg-white absolute left-0 top-0 w-full z-30'>
                <div 
                    data-aos="fade"
                    style={{
                        background: `url(https://img1.wsimg.com/isteam/stock/97626/:/rs=w:2046,m)`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: "100%",
                        height: "100vh"
                    }}
                >
                    <div  className='bg-black bg-opacity-[25%] w-full h-full flex items-center justify-center'>
                        <h1  className='text-[#ffffff] playfair-display  text-[25px] sm:text-[68px] font-normal'>Politics Made Simple</h1>
                    </div>
                </div>
            </div>
        </Provider>
    )
}

export default ClientProvider;

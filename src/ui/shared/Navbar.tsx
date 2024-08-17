"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from "@/assets/logo.png"
import { Badge, Input } from 'antd';
import { BiHeart, BiSearch } from 'react-icons/bi';
import { BsCart } from 'react-icons/bs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface IRoute {
    label: string;
    path: string
}

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const path = usePathname();

    console.log(path)

    const items = [
        {
            label: "Home",
            path: "/"
        },
        {
            label: "Register to Vote",
            path: "/register"
        },
        {
            label: "Donate",
            path: "/donate"
        },
        {
            label: "Latest News",
            path: "/news"
        }
    ]

    return (
        <div className='bg-primary sticky top-0 z-20 h-20 flex items-center justify-center'>
            <div className='container flex items-center justify-center md:justify-between gap-10'>
                <div>
                    <Image
                        alt='logo'
                        width={220}
                        height={60}
                        src={Logo}
                    />
                </div>

                <ul className='hidden sm:flex items-center gap-10'>
                    {
                        items?.map((route:IRoute, index:number)=>{
                            return(
                                <Link 
                                    href={`${route.path}`} 
                                    key={index}
                                    className={` 
                                        ${path === route.path ? "text-[#07254A] font-semibold border-b-[4px] border-[#07254A]" : "text-[#666666] border-b-[4px] border-transparent"} 
                                        transition-all duration-150  text-[16px] leading-6 font-normal mt-[26px] pb-[26px]
                                    `}
                                >
                                    {route.label}
                                </Link>
                            )
                        })
                    }
                </ul>

                <div className='bg-[#FFFFFF] h-10 rounded-lg px-4 text-[#07254A] text-[16px] leading-6 font-normal hidden md:flex items-center justify-center'>
                    Your next election is in 61 days
                </div>

            </div>
        </div>
    )
}

export default Navbar
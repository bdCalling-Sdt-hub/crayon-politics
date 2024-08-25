"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from "@/assets/logo.png"
import { Dropdown, Space } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RxHamburgerMenu } from 'react-icons/rx';

interface IRoute {
    label: string;
    path: string
}

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const path = usePathname();

    const items = [
        {
            label: "Home",
            path: "/"
        },
        {
            label: "Register to Vote",
            path: "/register-vote"
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

    const menuItems = [
        ...items.map((value , index) => ({
          key: index,
          label: (
            <Link
              href={value.path}
              className={`  ${path === value.path ? "text-[#07254A] font-medium border-b-[2px] border-[#07254A]" : "text-[#666666] border-b-[2px] border-transparent"} 
                transition-all duration-150  text-[16px] font-normal mt-[6px] pb-[2px]
            `}
            >
              {value.label}
            </Link>
          ),
        })),
        {
          type: "divider",
        },
        {
          key: "next-election",
          label: (
            <div className='bg-primary h-9 rounded-md px-2 text-[#07254A] text-[14px]  font-normal  flex items-center justify-center'>
                    Your next election is in 61 days
                </div>
          ),
        },
     
      ]; 


    return (
        <div className={`bg-primary lg:sticky top-0 z-20 h-20`}>
            <div className='container flex items-center justify-between gap-10'>
                <Image
                        alt='logo'
                        width={220}
                        height={60}
                        src={Logo}
                    />
                <div>
                     {/* Mobile device */}
                    <div className="lg:hidden block "> 
                      {/* @ts-ignore  */}
                      <Dropdown menu={{ items: menuItems }} trigger={['click']} overlayStyle={{padding:"1px"}}>
                        <a onClick={(e) => e.preventDefault()}>
                          <Space>
                            <RxHamburgerMenu size={20} />
                          </Space>
                        </a>
                      </Dropdown>
                    </div>
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

                <div className=' bg-[#FFFFFF] h-10 rounded-lg px-4 text-[#07254A] text-[16px] leading-6 font-normal hidden md:flex items-center justify-center'>
                    Your next election is in 61 days
                </div>

            </div>

            <div>
            
            </div>
        </div>
    )
}

export default Navbar
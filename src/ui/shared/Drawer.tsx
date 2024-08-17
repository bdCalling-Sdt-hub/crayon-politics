"user client";
import React from 'react';
import {Drawer as AntDrawer, Badge} from "antd";
import Link from 'next/link';
import { Bell, Heart, ShoppingCart, X } from 'lucide-react';
import Logo from "@/assets/logo2.svg";
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface IDrawerProps{
    open: boolean;
    setOpen: (open: boolean)=> void;
}

const Drawer: React.FC<IDrawerProps> = ({open, setOpen}) => {

    const pathName = usePathname();
    const item = [
        {
            label: "Home",
            path: "/"
        },
        {
            label: "Shop",
            path: "/shop"
        },
        {
            label: "About US",
            path: "/about"
        },
        {
            label: "Contact Us",
            path: "/contact"
        },
        {
            label: "Offer",
            path: "/offer"
        }
    ]

    return (
        <AntDrawer
            title={<div className='flex items-center justify-between'>
                <Link href={"/"}>
                    <Image alt='Logo' src={Logo} width={100} height={60} />
                </Link>
                <X onClick={()=>setOpen(false)} color='black' className='cursor-pointer' size={26} />
            </div>}
            placement={"left"}
            closable={false}
            onClose={()=>setOpen(false)}
            open={open}
            width={"100%"}  
        >
            <div className="flex items-start justify-center flex-col gap-6 mb-6">
                {
                    item.map((menu, index) => {
                        return(
                            <Link 
                                key={index} 
                                className={`
                                    h-[21px]
                                    text-[16px] leading-6 
                                    ${menu.path === pathName ? "text-primary font-bold transition-all duration-200" : "text-black font-normal"}
                                    border-[#D9D9D9]
                                    hover:text-primary
                                `}
                                onClick={()=>setOpen(false)} 
                                href={`${menu.path}`}
                            >
                                {menu.label}
                            </Link>
                        )
                    })
                }
            </div>

            <div className='flex items-center gap-6'>
                <Link href={"/wishlist"}>
                    <Badge count={5} color='#FFEDD5' style={{color: "black"}}>
                        <Heart color='#767676' size={24} />
                    </Badge>
                </Link>
                <Link 
                    href={"/notification"} >
                    <Badge count={5} color='#FFEDD5' style={{color: "black"}} >
                        <ShoppingCart color='#767676' size={24} />
                    </Badge>
                </Link>
                <Link href={"/login"}>
                    <button className='bg-primary text-white border-none outline-none rounded-3xl w-[108px] h-[40px]'>Login</button>
                </Link>
            </div>

        </AntDrawer>
    )
}

export default Drawer
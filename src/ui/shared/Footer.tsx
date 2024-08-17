"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import facebook  from "@/assets/facebook.png";
import instagram  from "@/assets/instagram.png";
import linkedin  from "@/assets/linkedin.png";
import twitter  from "@/assets/twitter.png";

interface IRoute{
    label : string;
    path: string;
}

const Footer:React.FC = () => {

    const items = [
        {
            label: "About us",
            path: "/about-us"
        },
        {
            label: "Privacy Policy",
            path: "/privacy-policy"
        },
        {
            label: "Terms & Conditions",
            path: "/terms-and-conditions"
        }
    ]

    return (
        <div className='bg-[#07254A]'>

            <div className='container flex items-center justify-between py-20'>
                <div className='flex items-center gap-10'>
                    {
                        items.map((route:IRoute, index:number) => {
                            return(
                                <Link 
                                    key={index} 
                                    className={` font-normal text-[16px] leading-6 text-[#F9F9F9]`} 
                                    href={`${route.path}`}
                                >
                                    {route.label}
                                </Link>
                            )
                        })
                    }
                </div>

                <div className='flex items-center gap-10'>
                    <p className='font-normal text-[16px] leading-6 text-[#F9F9F9]'>Follow Us </p>
                    <a href="https://www.facebook.com/" target='_blank'>
                        <Image
                            alt='social-link'
                            src={facebook}
                            width={32}
                            height={32}
                        />
                    </a>

                    <a href='https://www.instagram.com/' target='_blank'>
                        <Image
                            alt='social-link'
                            src={instagram}
                            width={32}
                            height={32}
                        />
                    </a>

                    <a href='https://www.linkedin.com/' target='_blank'>
                        <Image
                            alt='social-link'
                            src={linkedin}
                            width={32}
                            height={32}
                            />
                        </a>

                    <a href='https://www.twitter.com/' target='_blank'>
                        <Image
                            alt='social-link'
                            src={twitter}
                            width={32}
                            height={32}
                        />
                    </a>
                </div>
            </div>

            <div className='border-t-[1px] border-[#9C1E2E] py-[10px]'>
                <p className='text-center text-[#ffffff]'>© All rights reserved by Crayon Politics</p>
            </div>
        </div>
    )
}

export default Footer
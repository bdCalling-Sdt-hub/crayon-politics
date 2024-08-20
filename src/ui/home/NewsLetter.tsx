import Image from 'next/image'
import React from 'react';
import Logo from "@/assets/logo.png"
import { Input } from 'antd';

const NewsLetter:React.FC = () => {
    return (
        <div className='bg-[#F0F0F0] py-6'>
            <div className='flex items-center container justify-between'>
                <Image
                    alt='logo'
                    src={Logo}
                    width={300}
                    height={40}
                />
                <div className='flex items-center gap-3'>
                    <Input
                        style={{
                            background: "white",
                            border: "none",
                            outline: "none",
                            boxShadow: "none",
                            borderRadius: 90
                        }}
                        placeholder='Enter Your Email'
                        className='h-12 w-[400px]'
                    />
                    <button className='rounded-[90px] h-12 bg-[#07254A] border-none outline-none  text-white w-[226px]'>Subscribe to newsletter</button>
                </div>
            </div>
            
            
        </div>
    )
}

export default NewsLetter
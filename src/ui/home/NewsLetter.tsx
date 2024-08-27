import Image from 'next/image'
import React, { useState } from 'react';
import Logo from "@/assets/logo.png"
import { Input } from 'antd';
import { useSubscribeMutation } from '@/redux/apiSlices/webSlice';
import toast from 'react-hot-toast';

const NewsLetter:React.FC = () => {
    const [keyword, setKeyword] = useState<string>("")
    const [subscribe ] = useSubscribeMutation();

    const handleSubscribe=async()=>{
        try {
            await subscribe({email: keyword}).then((response:any)=>{
                if(response?.data?.success === true){
                    toast.success(response?.data?.message)
                    setKeyword("")
                }
            })
        } catch (error:any) {
            toast.error(error?.data?.message)
            
        }
    }
    return (
        <div className='bg-[#F0F0F0] py-6'>
            <div className='flex lg:flex-row flex-col items-center justify-between container  gap-3'>
                <Image
                    alt='logo'
                    src={Logo}
                    width={300}
                    height={40}
                />
                <div className=' w-full lg:w-[50%] flex flex-col sm:flex-row gap-3'>
                    <Input
                        style={{
                            background: "white",
                            border: "none",
                            outline: "none",
                            boxShadow: "none",
                            borderRadius: 90,
                            height: 48
                        }}
                        type='email'
                        value={keyword}
                        onChange={(e)=> setKeyword(e.target.value)}
                        placeholder='Enter Your Email'
                        className='w-full sm:w-[300px] md:w-full'
                    />
                    <button 
                        disabled={!keyword} 
                        onClick={handleSubscribe} 
                        className='disabled:bg-gray-600 disabled:cursor-not-allowed  rounded-[90px] whitespace-nowrap h-12 bg-[#07254A] border-none outline-none  text-white w-full sm:w-fit px-4'
                        >
                            Subscribe to newsletter
                        </button>
                </div>
            </div>
            
            
        </div>
    )
}

export default NewsLetter
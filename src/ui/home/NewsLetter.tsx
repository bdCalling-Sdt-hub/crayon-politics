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
        <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
                    <Input
                        style={{
                            background: "white",
                            border: "none",
                            outline: "none",
                            boxShadow: "none",
                            borderRadius: 12,
                            height: 48
                        }}
                        type='email'
                        value={keyword}
                        onChange={(e)=> setKeyword(e.target.value)}
                        placeholder='Enter Your Email'
                        className='w-full sm:w-[300px]'
                    />
                    <button 
                        disabled={!keyword} 
                        onClick={handleSubscribe} 
                        className='disabled:bg-gray-600 heading disabled:cursor-not-allowed w-full sm:w-fit rounded-[12px] whitespace-nowrap h-12 bg-[#07254A] border-none outline-none  text-white px-4'
                        >
                            Subscribe to newsletter
                        </button>
                </div>
    )
}

export default NewsLetter
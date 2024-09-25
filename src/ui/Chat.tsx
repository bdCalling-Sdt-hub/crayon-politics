"use client";
import React, { useState } from 'react';
import { BiSolidLeftArrow } from "react-icons/bi";
import Image from 'next/image';
import { Send, X } from 'lucide-react';
import Logo from "@/assets/logo.png";
import { IoChatbubbleEllipses } from 'react-icons/io5';
import { useChat } from 'ai/react';

const Chat = () => {
    const [open, setOpen] = useState(false);
    const { messages, input, handleInputChange, handleSubmit } = useChat();

    return (
        <div>

            <div 
                className={`
                    w-[300px] md:w-[349px] overflow-hidden h-[451px] fixed right-6 md:right-[100px] bottom-[200px] md:bottom-[120px]
                    ${open ? "z-20 transition-all duration-200 " : "-z-50 transition-all duration-200"}
                `}
            >
                <div
                    className={`
                        bg-white border-2 border-primary rounded-[13px]
                        ${open ? "translate-y-0  translate-x-0 transition-all duration-200 " : "translate-y-[500px] md:translate-y-0 md:translate-x-[360px] transition-all duration-200"}
                    `}
                >
                        {/* head */}
                        <div className='bg-[#07254A] px-4 flex items-center justify-between h-[60px] w-full rounded-t-[9px]'>
                            <Image  className='brightness-0 invert' alt='Logo' src={Logo} width={100} height={50} />
                            <X className='cursor-pointer' onClick={()=>setOpen(false)} color='#F7F7F7' size={24} />
                        </div>

                        {/* body */}
                        <div className='h-[325px] chat overflow-y-auto bg-white p-2'>
                            {
                                messages.map(m => (
                                    <div 
                                        key={m.id} 
                                        className={`w-full flex mb-2  
                                        ${ m?.role === "assistant"   ? "items-end justify-end" : "items-start justify-start" }`}
                                    >
                                        <p className='w-[80%] text-[14px] text-justify'>
                                            {m.content}
                                        </p>
                                    </div>
                                ))
                            }
                        </div>

                        {/* footer  */}
                        <div className='relative border-t-[1px] border-[#F0EFEF] p-2'>

                            <form onSubmit={handleSubmit} className='w-full flex items-center gap-2'>
                                <input
                                    placeholder='Message....'
                                    className='w-full border-none px-2 bg-[#F3F3F3] rounded outline-none shadow-none h-10 '
                                    value={input}
                                    onChange={handleInputChange}
                                />
                                <div 
                                    style={{
                                        clipPath: "circle()"
                                    }}
                                    className='bg-[#07254A] w-10 h-10 flex items-center justify-center'
                                >
                                    <button 
                                        type="submit"
                                        className='bg-transparent border-none outline-none shadow-none'
                                    >
                                        <Send size={20} color='#F8F8F8' />
                                    </button>
                                </div>
                            </form>

                        </div>

                </div>
            </div>

            <div className='z-20 fixed right-6 bottom-[120px] flex flex-col md:flex-row items-center'>
                <div className='w-6 h-6 flex items-center justify-center overflow-hidden'>
                    <BiSolidLeftArrow 
                        size={16} 
                        color='#07254A' 
                        className={`rotate-90 md:rotate-0  ${open ? "translate-y-0 translate-x-0 transition-all duration-200" : " translate-y-5 md:translate-y-0 md:translate-x-5 transition-all duration-200"}  `}
                    />
                </div>
                <div 
                    onClick={()=>setOpen(!open)} 
                    className=' w-[50px] cursor-pointer flex items-center justify-center h-[50px] rounded-full border-2 p-2 border-primary'
                >
                    <IoChatbubbleEllipses color='#FF7072' className='text-se' size={40} />
                </div>
            </div>

        </div>
        
       
    )
}

export default Chat
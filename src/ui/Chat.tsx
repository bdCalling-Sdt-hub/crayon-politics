"use client";
import React, { useState } from 'react';
import { BiSolidLeftArrow } from "react-icons/bi";
import Image from 'next/image';
import { Button, Form, Input } from 'antd';
import { Send, X } from 'lucide-react';
import Logo from "@/assets/logo.png";
import { IoChatbubbleEllipses } from 'react-icons/io5';
import axios from 'axios';
import { OpenAI } from 'openai';

const perplexity = new OpenAI({
    apiKey: "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",
    baseURL: 'https://api.perplexity.ai',
    dangerouslyAllowBrowser: true
});

const Chat = () => {
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState<File | null>(null);
    const [text, setText] = useState<string | undefined>("");
    const [messages, setMessages] = useState([]); 
    const [form] = Form.useForm();

    const onSubmit= async(values: any)=>{
        console.log(values);
        try {
            const response = await perplexity.chat.completions.create({
                model: 'mistral-7b-instruct',
                max_tokens: parseInt("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" ?? '512'),
                messages: [{ role: 'user', content: values?.text }],
                stream: false,
            });

            console.log(response)
        } catch (error) {
            const errorMessage = { sender: "ai", text: "Something went wrong. Please try again." };
        }
    }

    return (
        <div>

            <div 
                className={`
                    w-[349px] overflow-hidden h-[451px] fixed right-[100px] bottom-[120px]
                    ${open ? "z-20 transition-all duration-200 " : "-z-50 transition-all duration-200"}
                `}
            >
                <div
                    className={`
                        bg-white border-2 border-primary rounded-[13px]
                        ${open ? "translate-x-0 transition-all duration-200 " : "translate-x-[360px] transition-all duration-200"}
                    `}
                >
                        {/* head */}
                        <div className='bg-[#07254A] px-4 flex items-center justify-between h-[60px] w-full rounded-t-[9px]'>

                            <Image  className='brightness-0 invert' alt='Logo' src={Logo} width={100} height={50} />
                            <X className='cursor-pointer' onClick={()=>setOpen(false)} color='#F7F7F7' size={24} />


                        </div>

                        {/* body */}
                        <div className='h-[325px] chat overflow-y-auto bg-white'>
                            {
                                [...Array(20)].map((message, index)=>{
                                    return(
                                        <div key={index} className={`flex mb-3 p-2 ${ index % 2 ===  0 ? "items-end justify-end" : "items-start justify-start" }`}>
                                            <div  className='bg-[#FFF5F1] w-[270px] p-2 rounded-lg'>
                                                <p className='text-[16px] leading-6 text-[#767676] font-normal'>Hello Romzz , i have some 
                                                confutation, do you can help me? </p>

                                                <p className='text-right text-[16px] leading-6 text-[#A1A1A1] font-normal'>08:00pm, today</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        {/* footer  */}
                        <div className='relative border-t-[1px] border-[#F0EFEF] p-2'>

                            <div style={{display: image? "block" : "none"}}  className='absolute left-2 -top-16 border border-primary'>
                                <div className='relative w-16 h-16' onClick={()=>setImage(null)}>
                                    {
                                        image &&
                                        <Image
                                            alt='message-image'
                                            src={URL?.createObjectURL(image)}
                                            fill
                                        />
                                    }
                                </div>
                            </div>


                            <Form
                                form={form}
                                onFinish={onSubmit}
                                className='flex items-center gap-2'
                            >

                                <Form.Item
                                    style={{marginBottom: 0}}
                                    className='flex-1'
                                    name={"text"}
                                >
                                    <Input
                                        onChange={(e)=>setText(e.target.value)}
                                        placeholder='Message....'
                                        style={{
                                            width: "100%",
                                            border: "none",
                                            background: "#F3F3F3",
                                            borderRadius: 4,
                                            outline: "none",
                                            boxShadow: "none",
                                            height: 40
                                        }}
                                        className='placeholder:text-[#A1A1A1]'
                                    />
                                </Form.Item>
                                <Form.Item
                                    style={{
                                        marginBottom: 0,
                                        background: "#07254A",
                                        width: 40,
                                        height: 40,
                                        borderRadius: "100%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}
                                >
                                    <Button
                                        disabled={!text}
                                        htmlType='submit' 
                                        style={{
                                            background: "transparent",
                                            border: "none",
                                            outline: "none",
                                            boxShadow: "none",
                                            padding: 0,
                                            borderRadius: 0
                                        }}
                                    >
                                        <Send size={20} color='#F8F8F8' />
                                    </Button>
                                </Form.Item>
                            </Form>

                        </div>

                </div>
            </div>

            <div className='z-20 fixed right-6 bottom-[120px] flex items-center'>
                <div className='w-6 h-6 flex items-center justify-center overflow-hidden'>
                    <BiSolidLeftArrow 
                        size={16} 
                        color='#07254A' 
                        className={` ${open ? "translate-x-0 transition-all duration-200" : "translate-x-5 transition-all duration-200"}  `}
                    />
                </div>
                <div 
                    onClick={()=>setOpen(!open)} 
                    className=' w-[50px] cursor-pointer flex items-center justify-center h-[50px] rounded-full border-2 p-2 border-primary'
                >
                    {/* <Image
                        alt='call-center'
                        src={call}
                        width={35}
                        height={35}
                        className={``}
                    /> */}
                    <IoChatbubbleEllipses color='#FF7072' className='text-se' size={40} />
                </div>
            </div>

        </div>
        
       
    )
}

export default Chat
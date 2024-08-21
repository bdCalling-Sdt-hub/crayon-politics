"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import tiktok  from "@/assets/tiktok.png";
import instagram  from "@/assets/instagram.png";
import twitter  from "@/assets/twitter.png";
import Modal from './Modal';
import { Button, Form, Input } from 'antd';

interface IRoute{
    label : string;
    path: string;
}

interface IValuesProps{
    feedback: string;
}

const Footer:React.FC = () => {
    const [open, setOpen] = useState(false);

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

    const handleSubmit=(values:IValuesProps)=>{
        console.log(values)
    }
    return (
        <div className='bg-[#07254A]'>

            <div className='container flex items-center justify-between pt-20'>
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

                <div className='flex items-center gap-7'>
                    <a href="https://www.facebook.com/" target='_blank'>
                        <Image
                            alt='social-link'
                            src={tiktok}
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

            <p onClick={()=>setOpen(true)} className='text-[#f9f9f9f9] container text-[16px] leading-6 font-normal my-10 cursor-pointer'>Let us know what you think</p>

            <div className='border-t-[1px] border-[#9C1E2E] py-[10px]'>
                <p className='text-center text-[#ffffff]'>© All rights reserved by Crayon Politics</p>
            </div>

            <Modal
                title='Put Your Feedback'
                setOpen={setOpen}
                open={open}
                body={<div>
                    <Form className='mt-4' onFinish={handleSubmit}>
                        <Form.Item
                            name={"feedback"}
                            rules={[
                                {
                                    required: true,
                                    message: "Please Enter Any Message as Feedback"
                                }
                            ]}
                        >
                            <Input.TextArea
                                style={{
                                    background: "#F0F0F0",
                                    border: "none",
                                    outline: "none",
                                    boxShadow: "none",
                                    resize: "none",
                                    width: "100%",
                                    height: 200
                                }}
                            />
                        </Form.Item>
                        <Form.Item className='flex mt-8 items-center justify-center' style={{marginBottom: 0}}>
                                <Button
                                    htmlType='submit'
                                    style={{
                                        background: "#07254A",
                                        border: "none",
                                        outline: "none",
                                        boxShadow: "none",
                                        width: 200,
                                        borderRadius: 8,
                                        height: 42,
                                        color: "white"
                                    }}
                                >
                                    Submit
                                </Button>
                            </Form.Item>
                    </Form>
                </div>}
            />
        </div>
    )
}

export default Footer
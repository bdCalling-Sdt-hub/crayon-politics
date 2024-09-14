"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import tiktok  from "@/assets/tiktok.png";
import instagram  from "@/assets/instagram.png";
import twitter  from "@/assets/twitter.png";
import Modal from './Modal';
import { Button, Form, Input } from 'antd';
import { useFeedbackMutation } from '@/redux/apiSlices/webSlice';
import toast from 'react-hot-toast';
import { Instagram, X } from 'lucide-react';
import { FaInstagram, FaMusic, FaTiktok, FaTwitter, FaXTwitter } from 'react-icons/fa6';
import { FiX } from 'react-icons/fi';
import GoogleAds from '../GoogleAds';

interface IRoute{
    label : string;
    path: string;
}

interface IValuesProps{
    feedback: string;
}

const Footer:React.FC = () => {
    const [open, setOpen] = useState(false);
    const [keyword, setKeyword] = useState<string>("")
    const [ feedback ] = useFeedbackMutation();
    const [form] = Form.useForm()

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

    const socialMedia = [
        {
            icon: <FaInstagram color="white" size={30} />,
            link: "https://www.instagram.com/crayon.politics/",
            background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)"
        },
        {
            icon: <FaXTwitter color="white" size={30} />,
            link: "https://x.com/crayonpoliticsx",
            background: "#000000"
        },{
            icon: <FaTiktok size={30}
                style={{ 
                color: 'white', 
                filter: `drop-shadow(2px 2px 0px #EE1D52) drop-shadow(-2px -2px 0px #69C9D0)` 
                }}
            />,
            link: "https://www.tiktok.com/@crayon.politics?_t=8pV6im59XAd&_r=1",
            background: '#010101', 
        },

    ]

    const handleSubmit=async(values:any)=>{
        try {
            await feedback({content: values?.content}).then((response:any)=>{
                if(response?.data?.success === true){
                    toast.success(response?.data?.message)
                    form.resetFields()
                }
            })
        } catch (error:any) {
            toast.error(error?.data?.message) 
        }
    }
    return (
        <div className='bg-[#07254A]'>
            <GoogleAds/>
            <div className='container flex lg:flex-row flex-col items-center justify-between pt-20'>
                <div className='flex items-center justify-center lg:gap-10 gap-4'>
                    {
                        items.map((route:IRoute, index:number) => {
                            return(
                                <Link 
                                    key={index} 
                                    className={` font-normal lg:text-[16px] text-[14px] leading-6 text-[#F9F9F9]`} 
                                    href={`${route.path}`}
                                >
                                    {route.label}
                                </Link>
                            )
                        })
                    }
                </div>

                <div className='flex items-center gap-7 mt-3 lg:mt-0' >
                    {
                        socialMedia?.map((item, index)=>{
                            return(
                                <div key={index} className='rounded-lg p-1' style={{background: item?.background}}>
                                    <a className='heading' href={item?.link}>
                                        <p className='heading'>
                                            {item?.icon}
                                        </p>
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <p onClick={()=>setOpen(true)} className='text-[#f9f9f9f9] container text-[16px] leading-6 font-normal my-10 cursor-pointer text-center lg:text-start'>Let us know what you think</p>

            <div className='border-t-[1px] border-[#9C1E2E] py-[10px]'>
                <p className='text-center text-[#ffffff]'>© All rights reserved by Crayon Politics</p>
            </div>

            <Modal
                title="Feedback"
                setOpen={setOpen}
                open={open}
                body={<div>
                    <Form className='mt-4' onFinish={handleSubmit} form={form}>
                        <Form.Item
                            name={"content"}
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
                                onChange={(e)=>setKeyword(e.target.value)}
                            />
                        </Form.Item>
                        <Form.Item className='flex mt-8 items-center justify-center' style={{marginBottom: 0}}>
                                <Button
                                    disabled={!keyword}
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
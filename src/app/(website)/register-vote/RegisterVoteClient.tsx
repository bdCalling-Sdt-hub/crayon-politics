"use client"
import Heading from '@/ui/shared/Heading';
import { Button, Form, Select } from 'antd';
import { ChevronDown } from 'lucide-react';
import React from 'react';

const RegisterVoteClient = () => {

    const handleSubmit=(values: any)=>{
        const url =  "https://register.vote.org/?campaign=free-tools&partner=111111"
        // const url = `https://register.vote.org/?campaign=free-tools&partner=111111&state=${encodeURIComponent(state)}`;

        // window.location.href = url;
        // Open the dynamically constructed URL in a new tab
        window.open(url, '_blank');
    }

    return (
        <div className='container py-10 h-[65.2vh]'>

            {/* heading  */}
            <Heading name="Register to Vote"  style="font-normal w-fit lg:text-[32px] text-[28px] border-b-[4px] lg:pb-3 border-[#9C1E2E]  leading-[48px] text-[#3E3E3E] mb-6" />

            <p className='lg:w-[80%] w-[100%] text-justify font-normal text-[16px] leading-6 text-[#525252]'>
                Vote.org fights for voters in every state, in every way possible. There is no other organization engaging in this work on every front, on every level: serving individual voters, creatively building tech and partnerships and programs to reach underserved voters, and fighting harmful voter suppression laws in the courts.
            </p>

            <Form 
                layout='vertical'
                onFinish={handleSubmit} 
                className='lg:w-[400px] mx-auto mt-20'
            >
                <Form.Item
                    name="amount"
                    rules={[
                        {
                            required: true,
                            message: "Please Select any State"
                        }
                    ]}
                    
                    label={<p className='font-normal text-[16px] leading-6 text-black'>Location</p>}
                >
                    <Select
                        style={{
                            height: 42,
                            outline: "none",
                            boxShadow: "none"
                        }}
                        suffixIcon={<ChevronDown size={24} color='#666666' />}
                        placeholder={<p className='font-normal text-[16px] leading-6 text-[#525252]'>Choose Your State</p>}
                    >
                        <Select.Option value={"new work2"}>New Work</Select.Option>
                        <Select.Option value={"new work3"}>New Work</Select.Option>
                        <Select.Option value={"new work4"}>New Work</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item>
                    <Button
                        htmlType='submit'
                        style={{
                            background: "#07254A" ,
                            color: "white",
                            border: "none",
                            outline: "none",
                            boxShadow: "none",
                            borderRadius: 8,
                            height: 42,
                            marginTop: 0
                        }}
                        className='w-full'
                    >
                        Register Now
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default RegisterVoteClient
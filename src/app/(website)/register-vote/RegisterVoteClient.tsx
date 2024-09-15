"use client"
import { useStateQuery } from '@/redux/apiSlices/webSlice';
import Heading from '@/ui/shared/Heading';
import { Button, Form, Select } from 'antd';
import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

const RegisterVoteClient = () => {
    const {data: states} = useStateQuery(undefined);
    const [state, setState] = useState("")

    const handleSubmit=(values: any)=>{
        const url = `https://register.vote.org/?campaign=free-tools&partner=111111&state=${encodeURIComponent(values?.state)}`;
        
        window.open(url, '_blank');
    }

    return (
        <div className='container py-10 h-[65.2vh]'>

            {/* heading  */}
            <Heading name="Register to Vote"  style="font-normal heading w-fit lg:text-[32px] text-[28px] border-b-[4px] lg:pb-3 border-[#9C1E2E]  leading-[48px] text-[#3E3E3E] mb-6" />

            <p className='lg:w-[80%] w-[100%] text-justify font-normal text-[16px] leading-6 text-[#525252]'>
                Registering to vote is the first step to ensuring your voice is heard this election. Register right now with our tool powered by vote.or
            </p>

            <Form 
                layout='vertical'
                onFinish={handleSubmit} 
                className='lg:w-[400px] mx-auto mt-20'
            >
                <Form.Item
                    name="state"
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
                        {
                            states?.data?.map((state:any, index: number)=>{
                                return(
                                    <Select.Option key={index} value={state?.name}>{state?.name}</Select.Option>
                                )
                            })
                        }
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
"use client";
import { useIntentMutation } from '@/redux/apiSlices/webSlice';
import Payment from '@/ui/Payment';
import Heading from '@/ui/shared/Heading';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Button, Form } from 'antd';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const stripePromise = loadStripe('pk_test_51JwnGrLiLwVG3jO00U7B3YmokwdPnB6FKd1uresJgkbsL4f5xUfCmbFdBaGO42KvLmLfVzsgo1oIQToXABSTyypS00xQsEgKZ6');

const DonateClient = () => {
    const [selectedAmount, setSelectedAmount] = useState<number>(0);
    const [checked, setChecked] = useState("")
    const [form] = Form.useForm();
    const [open, setOpen] = useState(false);
    const [intent, {isLoading}] = useIntentMutation();
    const [clientSecret, setClientSecret] = useState("")

    useEffect(()=>{
        if(checked){
            form.setFieldsValue({payment_method: checked})
        }
    }, [form, checked])

    const handleSubmit=async()=>{
        try {
            await intent({price: selectedAmount}).then((response:any)=>{
                if(response?.data?.success === true){
                    setClientSecret(response?.data?.data?.client_secret)
                    setOpen(true)
                }
            })
        } catch (error:any) {
            toast.error(error?.data?.message)
            
        }
        
    }
    return (
        <div className='container py-10'>

            {/* heading  */}
           <div className='px-0   md:px-24'>
           <Heading name="Defend Our Democracy and Donate Today"  style="font-normal heading  w-fit lg:text-[32px] text-[28px] border-b-[4px] lg:pb-3 border-[#9C1E2E]  leading-[48px] text-[#3E3E3E] mb-6" />

                <p className='font-normal text-[16px] text-justify leading-6 text-[#525252]'>
                    Vote.org fights for voters in every state, in every way possible. There is no other organization engaging in this work on every front, on every level: serving individual voters, creatively building tech and partnerships and programs to reach underserved voters, and fighting harmful voter suppression laws in the courts.
                </p>

                <br />

                <p className='font-normal text-[16px]  text-justify leading-6 text-[#525252]'>
                    Vote.org fights for voters in every state, in every way possible. There is no other organization engaging in this work on every front, on every level: serving individual voters, creatively building tech and partnerships and programs to reach underserved voters, and fighting harmful voter suppression laws in the courts.
                </p>
           </div>

            <div className='lg:mt-10 mt-5 bg-primary lg:w-[40%] w-[100%]  mx-auto rounded-lg p-6 '>
                <Heading name="Your donation"  style="font-medium heading text-[32px]  leading-[24px] text-[#242424] mb-8 lg:text-start text-center " />
                <div className='flex items-center lg:justify-between justify-center border-b-[3px] pb-4 border-dashed border-[#D0D0D0]'>

                    <input 
                        value={selectedAmount} 
                        type='text'
                        onChange={(e:any)=> setSelectedAmount(parseInt(e.target.value || 0))} 
                        className='w-[150px] bg-transparent outline-none shadow-none font-medium text-[35px]  leading-[24px] text-[#07254A]'
                    />
                    <Heading name="USD"  style="font-normal heading text-[28px]  leading-[24px] text-[#5C5C5C]" />
                </div>

                <Form onFinish={handleSubmit} form={form}>
                    <Form.Item
                        name="amount"
                        rules={[
                            {
                                required: true,
                                validator: () => {
                                    if (!selectedAmount) {
                                      return Promise.reject("Please Choose any Amount");
                                    }
                                    return Promise.resolve();
                                }
                            }
                        ]}
                    >
                        <div className='bg-white w-fit  mx-auto mt-6 p-4 rounded-lg flex lg:flex-row flex-wrap items-center gap-6'>
                            {
                                [10, 25, 50, 100]?.map((amount:number, index:number)=>{
                                    return(
                                        <p 
                                            key={index} 
                                            className={`w-[90px] whitespace-nowrap text-center cursor-pointer ${amount === selectedAmount ? "bg-[#FF7070] text-white border-transparent" : "border-[#D0D0D0]"} px-4 py-2 rounded-[90px] border `}
                                            onClick={()=>(setSelectedAmount(amount), form.setFieldsValue({amount: amount}) )}
                                        >
                                            {amount} USD
                                        </p>
                                    )
                                })
                            }
                        </div>
                    </Form.Item>

                    <Form.Item
                        name="payment_method"
                        rules={[
                            {
                                required: true,
                                validator: () => {
                                    if (!checked) {
                                      return Promise.reject("Please Choose Payment Method");
                                    }
                                    return Promise.resolve();
                                }
                            }
                        ]}
                    >
                        <div>
                            <div 
                                className='flex items-center cursor-pointer gap-2 mb-2 w-fit'
                                onClick={()=>setChecked("one_time")}
                            >
                                <div className={`w-5 h-5  border rounded-full ${checked === "one_time" ? "bg-[#FF7070]  border-transparent" : " border-[#666666]" } `}  />
                                <p className='text-[#666666] text-[16px] leading-6 font-normal'>One time donation</p>
                            </div>
                            <div 
                                className='flex w-fit cursor-pointer items-center gap-2'
                                onClick={()=>setChecked("monthly")}
                            >
                                <div className={`w-5 h-5  border rounded-full ${checked === "monthly" ? "bg-[#FF7070]  border-transparent" : " border-[#666666]" } `}  />
                                <p className='text-[#666666] text-[16px] leading-6 font-normal'>Monthly recurring donation</p>
                            </div>
                        </div>
                    </Form.Item>

                    <Form.Item className='flex items-center justify-center'>
                        <Button
                            htmlType='submit'
                            disabled={!checked}
                            style={{
                                background: checked ? "#07254A" : "#525252",
                                color: "white",
                                border: "none",
                                outline: "none",
                                boxShadow: "none",
                                borderRadius: 8,
                                height: 42
                            }}
                            className='w-[200px]'
                        >
                            {isLoading ? "Loading..." : "Donate"}
                        </Button>
                    </Form.Item>
                </Form>
            </div>

            <Elements stripe={stripePromise}>
                <Payment amount={selectedAmount} clientSecret={clientSecret} open={open} setOpen={setOpen} />
            </Elements>

        </div>
    )
}

export default DonateClient
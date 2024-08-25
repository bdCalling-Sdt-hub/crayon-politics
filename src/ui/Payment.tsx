"use client";
import { Modal } from "antd";
import React from 'react';
import {
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';

import { logEvent } from '@/utils/Stripe';
import { Input } from 'antd';
import { CiCalendarDate, CiCreditCard1 } from 'react-icons/ci';
import { LiaCcStripe } from 'react-icons/lia';
import StripeImage from "@/assets/stripe.png";
import Image from 'next/image';
import toast from "react-hot-toast";
import { useDonateMutation } from "@/redux/apiSlices/webSlice";

interface IPaymentProps{
    open: boolean;
    setOpen: (open: boolean)=> void;
    clientSecret: string;
    amount: number;
}

const Element_Options = {
    style: {
        base: {
            fontSize: '14px',
            color: 'black',
            letterSpacing: '0.025em',
            '::placeholder': {
                color: '#E0E0E0',
                fontWeight: 400
            }
        },
        invalid: {
            color: '#9e2146',
        },
    },
};


const Payment:React.FC<IPaymentProps> = ({open, setOpen, amount, clientSecret}) => {
    const stripe = useStripe(); 
    const elements = useElements();
    const [donate, {isLoading} ] = useDonateMutation();

    const handleSubmit = async () => {

        if (!stripe || !elements || !clientSecret) {
        }

        const cardElement = elements?.getElement(CardNumberElement);

        if (!cardElement || !clientSecret) {
            return setOpen(false);
        }

        await stripe?.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardElement
            }
        }).then(async (response)=>{
            if(response?.paymentIntent?.status === "succeeded"){
                try {
                    const data = {
                        trxId: response?.paymentIntent?.id,
                        amount: amount
                    }
                    await donate(data).then((result)=>{
                        if(result?.data?.success === true){
                            toast.success(result?.data?.message)
                            setOpen(false)
                        }
                    })
                } catch (error:any) {
                    toast.error(error?.data?.message) 
                }
            }
        }).catch((error:any)=>{
            console.log(error)
            toast.error(error.message)
        })


    };

    const body = (
        <div className='grid grid-cols-1 gap-4'>
            <div className="w-full h-[220px] relative">
                <Image
                    src={StripeImage}
                    fill
                    alt='stripe image'
                    style={{borderRadius: "8px 8px 0 0", objectFit: "cover"}}
                />
            </div>

            <div className="px-4 mt-2">
                <label><p className='text-black mb-[6px] text-[13px] font-medium'>Cardholder Name</p></label>
                <Input
                    style={{
                        border: "1px solid #d9d9d9",
                        outline: "none",
                        boxShadow: "none",
                        height: 40,
                        width: "100%",
                        background: "transparent"
                    }}
                    placeholder='Enter Your Name'
                />
            </div>

            <div className="px-4">
                <label className='block mb-[6px] text-black text-[13px] font-medium' >Card Information</label>
                <div className=' border border-[#d9d9d9] rounded-lg'>
                    <div className='border-b-[1px] border-[#d9d9d9] h-10 flex  items-center px-[11px]'>
                        <CardNumberElement
                            className='w-full '
                            id="cardNumber"
                            onBlur={logEvent('blur')}
                            onChange={logEvent('change')}
                            onFocus={logEvent('focus')}
                            onReady={logEvent('ready')}
                            options={Element_Options}
                        />
                        <LiaCcStripe size={24} />
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='w-full h-10 flex  items-center px-[11px]'>
                            <CardExpiryElement
                                className='w-full'
                                id="expiry"
                                onBlur={logEvent('blur')}
                                onChange={logEvent('change')}
                                onFocus={logEvent('focus')}
                                onReady={logEvent('ready')}
                                options={Element_Options}
                            />
                            <CiCalendarDate size={24} />
                        </div>
                        <div className='w-full border-l-[1px] border-[#d9d9d9] h-10 px-[11px] flex  items-center'>
                            <CardCvcElement
                                className='w-full  '
                                id="cvc"
                                onBlur={logEvent('blur')}
                                onChange={logEvent('change')}
                                onFocus={logEvent('focus')}
                                onReady={logEvent('ready')}
                                options={Element_Options}
                            />
                            <CiCreditCard1 size={24}  />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full px-4 pb-4">
                <button 
                    disabled={!clientSecret} 
                    onClick={handleSubmit}  
                    className='bg-[#07254A] w-full disabled:bg-[#eeeeee] text-white mt-5 h-10 rounded-md'
                >
                    {isLoading ? "Loading..." : "Pay"}
                </button>
            </div>
        </div>
    )

    
    return (
        <div>
            <Modal
                title={false}
                footer={false}
                open={open}
                width={450}
                closeIcon={false}
                bodyStyle={{ margin: -24 }}
                wrapClassName="payment"
            >
                {body}
            </Modal>
        </div>
    )
}

export default Payment
"use client";
import React, { useState } from 'react';
import Heading from '@/ui/shared/Heading';
import { Collapse, Pagination, PaginationProps, theme } from 'antd';
import { MdKeyboardArrowRight, MdOutlineArrowOutward } from 'react-icons/md';
import Link from 'next/link';

const Faq: React.FC = () => {
    const text = `Voter turnout is the percentage of voters that have actually taken part in the election.`;
    const getItems = (panelStyle:any) => [
        {
            key: '1',
            label: <p className=' text-[#525252] '>Why should you vote?</p>,
            children: <p>{text}</p>,
            style: panelStyle,
        },
        {
            key: '2',
            label: <p className=' text-[#525252] '>Why should you vote?</p>,
            children: <p>{text}</p>,
            style: panelStyle,
        },
        {
            key: '3',
            label: <p className=' text-[#525252] '>Why should you vote?</p>,
            children: <p>{text}</p>,
            style: panelStyle,
        },
        {
            key: '4',
            label: <p className=' text-[#525252] '>Why should you vote?</p>,
            children: <p>{text}</p>,
            style: panelStyle,
        },
        {
            key: '5',
            label: <p className=' text-[#525252] '>Why should you vote?</p>,
            children: <p>{text}</p>,
            style: panelStyle,
        },
        {
            key: '6',
            label: <p className=' text-[#525252] '>Why should you vote?</p>,
            children: <p>{text}</p>,
            style: panelStyle,
        }
    ];

    const { token } = theme.useToken();
    const panelStyle = {
        marginBottom: 24,
        background: "white",
        borderRadius: token.borderRadiusLG,
        border: '1px solid #5555551E',
    };
    return (
        <div className='container mb-11'>
            <Heading 
                name="Frequently Asked Questions" 
                style="font-normal w-fit lg:text-[32px] text-[28px] border-b-[4px] mx-auto lg:pb-3 border-[#9C1E2E] leading-[48px] text-[#3E3E3E] lg:mb-10 mb-6" 
            />

            <Collapse
                bordered={false}
                expandIconPosition='end'
                expandIcon={({ isActive }) =>
                    <div className='w-7 h-7 border border-[#07254A] rounded-full flex items-center justify-center'>
                        <MdKeyboardArrowRight className={`${isActive ? "rotate-90" : "rotate-0"}`} size={24} color='#07254A' />
                    </div> 
                }
                style={{background: token.colorBgContainer}}
                items={getItems(panelStyle)}
            />
            <div className='flex items-end justify-end'>
                <Link href={"/faq"} className='flex items-center gap-1 underline text-[#9C1E2E] text-[14px] font-normal'>View More <MdOutlineArrowOutward/></Link>
            </div>
        </div>
    )
}

export default Faq
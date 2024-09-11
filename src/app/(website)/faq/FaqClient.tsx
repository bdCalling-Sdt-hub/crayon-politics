"use client";
import React, { useState } from 'react';
import Heading from '@/ui/shared/Heading';
import { Collapse, Pagination, PaginationProps, theme } from 'antd';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useFaqQuery } from '@/redux/apiSlices/webSlice';

const FaqClient: React.FC = () => {
    const [page, setPage] = useState<string>("1");
    const {data: faqs} = useFaqQuery(undefined);
    console.log(faqs);
    
    const getItems = (panelStyle:any) => faqs?.data?.map((item:any, index:number)=>{
        return{
            key: index + 1,
            label: <p className=' text-[#525252] '>{item?.question} </p>,
            children: <p>{item?.answer}</p>,
            style: panelStyle,
        }
    })


    const { token } = theme.useToken();
    const panelStyle = {
        marginBottom: 24,
        background: "white",
        borderRadius: token.borderRadiusLG,
        border: '1px solid #5555551E',
    };


    const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
        if (type === 'prev') {
            return <a>Previous</a>;
        }
        if (type === 'next') {
            return <a>Next</a>;
        }
        return originalElement;
    };

    return (
        <div className='container py-10'>

            <Heading 
                name="Frequently Asked Questions" 
                style="font-normal heading w-fit text-[32px] border-b-[4px] mx-auto pb-3 border-[#9C1E2E] leading-[48px] text-[#3E3E3E] mb-6" 
            />

            <p className='text-[14px] text-[#525252] text-center leading-[18px] font-normal mb-10'> <span className='text-[#07254A]'>Crayon</span> <span className='text-[#FF9773]'>Politics</span> is an Quis urna. tempor consectetur risus quis dui. Ut leo. malesuada gravida eget ex. viverra Nunc Nunc dignissim, convallis.</p>

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

            {/* pagination */}
            <div className="flex items-center justify-center mt-6">
                <Pagination 
                    itemRender={itemRender} 
                    current={parseInt(page)} 
                    onChange={(page)=> setPage(page.toString())}
                    total={faqs?.pagination?.total}
                />
            </div>
        </div>
    );
};

export default FaqClient;

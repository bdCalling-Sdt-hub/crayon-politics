"use client";
import { Collapse, theme } from 'antd';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

interface IIssueProps{
    issue: [string] | undefined;
}

const Issue: React.FC<IIssueProps> = ({issue}) => {

    const getItems = (panelStyle:any) => issue?.map((item:any, index:number)=>{
        return{
            key: index + 1,
            label: <p className=' text-[#525252] '>{item?.question} </p>,
            children: <div dangerouslySetInnerHTML={{ __html: item?.answer}} />,
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
    return (
        <div>
            <Collapse
                bordered={false}
                expandIconPosition='end'
                expandIcon={({ isActive }) => <MdKeyboardArrowRight className={`${isActive ? "rotate-90" : "rotate-0"}`} size={24} color='#07254A' />}
                style={{background: token.colorBgContainer}}
                items={getItems(panelStyle)}
            />
        </div>
    )
}

export default Issue
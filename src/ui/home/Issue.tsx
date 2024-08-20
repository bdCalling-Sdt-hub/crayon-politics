"use client";
import { Collapse, theme } from 'antd';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Issue: React.FC = () => {
    const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
    `;

    const getItems = (panelStyle:any) => [
        {
            key: '1',
            label: <p className=' text-[#525252] '>On  Climate Change</p>,
            children: <p>{text}</p>,
            style: panelStyle,
        },
        {
            key: '2',
            label: <p className=' text-[#525252] '>On the Israel - Palestine  Conflict</p>,
            children: <p>{text}</p>,
            style: panelStyle,
        },
        {
            key: '3',
            label: <p className=' text-[#525252] '>On Reproductive Rights</p>,
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
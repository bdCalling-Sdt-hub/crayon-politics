"use client";
import { Collapse, theme } from 'antd';
import React, { useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

interface IIssueProps {
    issue: [string] | undefined;
}

const Issue: React.FC<IIssueProps> = ({ issue }) => {
    const [activeKey, setActiveKey] = useState<string | string[]>('');
    
    const getItems = (panelStyle: any) =>
        issue?.map((item: any, index: number) => {
            return {
                key: (index + 1).toString(),
                label: (
                    <p
                        className='text-[#525252]'
                        onMouseEnter={() => setActiveKey((index + 1).toString())}
                        // onMouseLeave={() => setActiveKey('')}
                    >
                        {item?.question}
                    </p>
                ),
                children: <div dangerouslySetInnerHTML={{ __html: item?.answer }} />,
                style: panelStyle,
            };
        });

    const { token } = theme.useToken();
    const panelStyle = {
        marginBottom: 24,
        background: 'white',
        borderRadius: token.borderRadiusLG,
        border: '1px solid #5555551E',
    };

    return (
        <div>
            <Collapse
                bordered={false}
                expandIconPosition='end'
                expandIcon={({ isActive }) => (
                    <MdKeyboardArrowRight
                        className={isActive ? 'rotate-90' : 'rotate-0'}
                        size={24}
                        color='#07254A'
                    />
                )}
                style={{ background: token.colorBgContainer }}
                activeKey={activeKey}
                onChange={(key) => setActiveKey(key)}
                items={getItems(panelStyle)}
            />
        </div>
    );
};

export default Issue;

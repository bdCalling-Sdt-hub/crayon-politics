"use client";
import { ConfigProvider, Timeline, theme } from 'antd';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

interface TimelineItem {
    color?: string;
    children: string;
  }

const TimeLine = ({color, name}: {color: string, name: string}) => {

    const items: TimelineItem[] = [
        { children: 'Joe Biden' },
        { children: 'Robert F. Kennedy Jr.' },
        { children: 'Chose Oliver' },
        { children: 'Jason Palmer' },
        { children: 'Lady Gaga' },
        { children: 'Donald Trump' },
        { children: 'Cenk Uygur' },
        { children: 'Cornel West' },
        { children: 'Marianne Williamson' },
    ];

    return (
        <ConfigProvider
            theme={{
                components: {
                    Timeline: {
                         itemPaddingBottom: 50, 
                        algorithm: true,
                    }
                }
            }}
        >
            <div>
                <Timeline
                    className=""
                    mode="right"
                    items={
                        items.map(item => ({
                            color: item.children === name ? color : "#242424",
                            children: item.children,
                        }))
                    }
                    
                />
            </div>
        </ConfigProvider>
    )
}
export default TimeLine;
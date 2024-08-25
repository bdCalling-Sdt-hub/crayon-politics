"use client"
import { useAboutQuery } from '@/redux/apiSlices/webSlice';

import Heading from '@/ui/shared/Heading';
import React from 'react';

const AboutUsClient = () => {
    const {data: about} = useAboutQuery(undefined)
    return (
        <div className='container py-10'>

            {/* heading  */}
            <Heading name="About Us"  style="font-normal w-fit text-[32px] border-b-[4px] pb-3 border-[#9C1E2E]  leading-[48px] text-[#3E3E3E] mb-6" />

            <div dangerouslySetInnerHTML={{ __html: about?.data?.content }}></div>

        </div>
    )
}

export default AboutUsClient;
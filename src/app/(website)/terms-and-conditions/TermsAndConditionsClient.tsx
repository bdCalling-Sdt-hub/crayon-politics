"use client"; 
import { useTermsQuery } from '@/redux/apiSlices/webSlice';
import Heading from '@/ui/shared/Heading';
import React from 'react';

const TermsAndConditionsClient = () => {
  const {data: terms} = useTermsQuery(undefined)
  return (
    <div className='container pb-10'>

            {/* heading  */}
            <Heading name="Terms And Conditions"  style="font-normal heading w-fit text-[32px] border-b-[4px] pb-3 border-[#9C1E2E]  leading-[48px] text-[#3E3E3E] mb-6" />

            <div dangerouslySetInnerHTML={{ __html: terms?.data?.content }}></div>

        </div>
  )
}

export default TermsAndConditionsClient;
"use client";
import React, { useState } from "react";
import News1 from "@/assets/news1.png";
import News2 from "@/assets/news2.png";
import News3 from "@/assets/news3.png";
import News4 from "@/assets/news4.png";
import News5 from "@/assets/news5.png";
import News6 from "@/assets/news6.png";
import News7 from "@/assets/news7.png";
import News8 from "@/assets/news8.png";
import News9 from "@/assets/news9.png";
import News10 from "@/assets/news10.png";
import Image, { StaticImageData } from "next/image";
import { Pagination, PaginationProps } from "antd";
import Link from "next/link";

import { MdOutlineArrowOutward } from "react-icons/md";
import Heading from "@/ui/shared/Heading";
import { useHighLiteQuery, useNewsQuery, useTopNewsQuery } from "@/redux/apiSlices/webSlice";
import { imageUrl } from "@/redux/api/baseApi";

interface INewsProps {
    _id?: string;
    image: StaticImageData;
    news: JSX.Element;
    title?: string;
    description?: string;
}

const NewsClient = () => {
    const [page, setPage] = useState<string>("1");
    const {data: newsList} = useNewsQuery(undefined);
    const {data: topNews} = useTopNewsQuery(undefined);
    const {data: highLite} = useHighLiteQuery(undefined);


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
        <div className="container mx-auto px-4 py-10">

            {/* Heading */}
            <Heading
                name="Today's Top Events"
                style="font-normal lg:w-fit heading w-full text-[24px] lg:text-[32px] border-b-[4px] pb-3 border-[#9C1E2E] leading-[36px] lg:leading-[48px] text-[#3E3E3E] mb-6"
            />

            {/* News Container */}
            <div className="grid grid-cols-12 gap-6">
                {/* Main News Section */}
                <div className="lg:col-span-7 col-span-12">
                    <div className="border-b-[1px] border-[#D0D0D0] pb-6">
                        {/* Latest News */}
                        <div className="relative h-[300px] lg:h-[400px] w-full border mb-4">
                            {
                                topNews?.data?.image
                                &&
                                <Image
                                    alt="new image"
                                    src={`${imageUrl}${topNews?.data?.image}`}
                                    fill={true}
                                    priority={true}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="w-auto h-auto  object-fill object-center"
                                />
                            }
                        </div>
                        <div>
                            <h1 className="text-[#242424] heading text-[24px] lg:text-[32px] font-semibold leading-[36px] lg:leading-[48px]">{topNews?.data?.title}</h1>
                            <div className="text-[#5C5C5C] my-2 text-[14px] font-normal leading-[21px]" dangerouslySetInnerHTML={{ __html: topNews?.data?.description}} />
                            {/* <p className="text-[#5C5C5C] my-2 text-[14px] font-normal leading-[21px]">{topNews?.data?.description}</p> */}
                            <Link
                                href={`news-details/${topNews?.data?._id}`}
                                className="flex items-center gap-2 text-[#07254A] font-normal text-[14px] leading-6 underline"
                            >
                                Visit Now
                                <MdOutlineArrowOutward size={20} color="#07254A" />
                            </Link>
                        </div>
                    </div>

                    {/* Other News */} 
                    <div className="mt-6 grid grid-cols-1 gap-4">
                        {newsList?.data?.map((news: INewsProps, index: number) => (
                            <div key={index} className="flex lg:flex-row border flex-col-reverse gap-4 p-4 rounded">
                                <div className="flex-1">
                                    <h1 className="text-[#242424] heading text-[20px] lg:text-[24px] font-semibold leading-[30px] lg:leading-[36px]">{news?.title}</h1>
                                    <div className="text-[#5C5C5C] my-2 text-[14px] font-normal leading-[21px]" dangerouslySetInnerHTML={{ __html: topNews?.data?.description}} />
                                    <Link
                                        href={`news-details/${news?._id}`}
                                        className="flex items-center gap-2 text-[#07254A] font-medium text-[14px] leading-6 underline"
                                    >
                                        Visit Now
                                        <MdOutlineArrowOutward size={20} color="#07254A" />
                                    </Link>
                                </div>
                                <div className="relative h-[150px] lg:h-[150px] w-full lg:w-[250px] border">
                                    {
                                        news?.image
                                        &&
                                        <Image
                                            alt="new image"
                                            src={`${imageUrl}${news?.image}`}
                                            fill={true}
                                            priority={true}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="w-auto h-auto  object-fill object-center"
                                        />
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sidebar News Section */}
                <div className="lg:col-span-5 col-span-12">
                    {highLite?.data?.map((news: INewsProps, index: number) => (
                        <div key={index} className="flex lg:flex-row flex-col-reverse gap-4 border mb-4  p-4 rounded">
                            <div className="flex-1">
                                <h1 className="text-[#242424] text-[16px] heading font-semibold leading-6">{news?.title}</h1>
                                {/* <p className="text-[#5C5C5C] my-2 text-[14px] font-normal leading-[21px]">{news?.description}</p> */}
                                <div className="text-[#5C5C5C] my-2 text-[14px] font-normal leading-[21px]" dangerouslySetInnerHTML={{ __html: news?.description as string}} />
                                <Link
                                    href={`news-details/${news._id}`}
                                    className="flex items-center gap-2 text-[#07254A] font-medium text-[14px] leading-6 underline"
                                >
                                    Visit Now
                                    <MdOutlineArrowOutward size={20} color="#07254A" />
                                </Link>
                            </div>
                            <div className="relative h-[130px] lg:h-[130px] w-full lg:w-[250px] border">
                                {
                                        news?.image
                                        &&
                                        <Image
                                            alt="new image"
                                            src={`${imageUrl}${news?.image}`}
                                            fill={true}
                                            priority={true}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="w-auto h-auto  object-fill object-center"
                                        />
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center mt-6">
                <Pagination
                    itemRender={itemRender}
                    current={parseInt(page)}
                    onChange={(page) => setPage(page.toString())}
                    total={newsList?.pagination?.total}
                />
            </div>
        </div>
    );
};

export default NewsClient;

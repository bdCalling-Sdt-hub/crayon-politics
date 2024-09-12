import React from 'react'

const Banner = () => {
    return (
        <div
            style={{
                background: `url(https://img1.wsimg.com/isteam/stock/97626/:/rs=w:2046,m)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "center",
                backgroundPosition: "center",
                width: "100%",
                height: "100vh"
            }}
            className='absolute left-0 top-0 z-50'
        >
            <div className='bg-black bg-opacity-[25%] w-full h-full flex items-center justify-center'>
                <h1 className='text-[#ffffff] playfair-display  text-[25px] sm:text-[68px] font-normal'>Politics Made Simple</h1>
            </div>
        </div>
    )
}

export default Banner
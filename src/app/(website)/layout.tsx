import React from 'react';
import Footer from '@/ui/shared/Footer';
import Navbar from '@/ui/shared/Navbar';

const layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div>
            <Navbar/>
            <div>
                {children}
            </div>
            <Footer/>
        </div>
    )
}

export default layout
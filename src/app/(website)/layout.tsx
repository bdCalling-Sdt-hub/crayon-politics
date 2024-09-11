import React from 'react';
import Footer from '@/ui/shared/Footer';
import Navbar from '@/ui/shared/Navbar';
import Chat from '@/ui/Chat';

const layout = ({children}: {children: React.ReactNode}) => {
    // const [openBanner, setOpenBanner] = useState(true);
    return (
        <div>
            <Navbar/>
            <div>
                {children}
            </div>
            {/* <Chat/> */}
            <Footer/>
        </div>
    )
}

export default layout
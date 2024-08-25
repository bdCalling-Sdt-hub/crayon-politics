import React, {useState, useEffect} from 'react';

interface IResultProps{
    children: React.ReactNode
}

export const logEvent = (name:any) => (event:any) => {};
export const Result: React.FC<IResultProps> = ({children}) => <div className="result">{children}</div>;
export const ErrorResult: React.FC<IResultProps> = ({children}) => (
    <div className="error">{children}</div>
);


export const useDynamicFontSize = () => {
    const [fontSize, setFontSize] = useState(
        window.innerWidth < 450 ? '14px' : '18px'
    );
  
    useEffect(() => {
        const onResize = () => {
            setFontSize(window.innerWidth < 450 ? '14px' : '18px');
        };
  
        window.addEventListener('resize', onResize);
    
        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);
  
    return fontSize;
};
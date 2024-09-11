"use client";
import React from 'react';
import { Modal as AntModal } from "antd";

interface IModalProps{
    title?: string,
    open: boolean;
    setOpen:( open: boolean )=> void;
    body: React.ReactElement;
    width?: number;
}

const Modal:React.FC<IModalProps> = ({title, open, setOpen, body, width}) => {
    const handleClose=()=>{
        setOpen(false)
    }
    return (
        <AntModal
            title={<p className='heading'>{title}</p>}
            footer={false}
            open={open}
            onCancel={handleClose}
            bodyStyle={{padding: 0, margin: 0}}
            width={width || 500}
        >
            {body}
        </AntModal>
    )
}

export default Modal
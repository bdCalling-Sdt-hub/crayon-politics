import React from 'react'

interface IDetailsProps{
    newsId: string;
}

const DetailsClient: React.FC<IDetailsProps> = ({newsId}) => {
    return (
        <div className='container'>DetailsClient {newsId}</div>
    )
}

export default DetailsClient
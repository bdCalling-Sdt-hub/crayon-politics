import React from 'react'
import NewsDetailsClient from '../NewsDetailsClient'

const page = ({ params: {newsId}}: {params: {newsId: string}}) => {
    return (
        <React.Fragment>
            <NewsDetailsClient newsId={newsId} />
        </React.Fragment>
    )
}

export default page
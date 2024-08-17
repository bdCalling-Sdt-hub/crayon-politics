import React from 'react'
import DetailsClient from '../DetailsClient'

const page = ({ params: {newsId}}: {params: {newsId: string}}) => {
    return (
        <React.Fragment>
            <DetailsClient newsId={newsId} />
        </React.Fragment>
    )
}

export default page
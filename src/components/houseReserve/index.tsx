import React from 'react'
import Breadcrumb from '../common/BreadCrumb'

const HouseReserveWrapper = () => {

    const breadcrumbItems = [{
        label: "رزرو هتل",
    }]

    return (
        <>
            <Breadcrumb items={breadcrumbItems} />
            <div></div>
        </>

    )
}

export default HouseReserveWrapper
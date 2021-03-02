import React from 'react'
import Homepage from '../../Homepage'
import Pricing from '../../Pricing';
import { homeObjThree } from "./Data";
function Services() {
    return (
        <>
            <Pricing />
            <Homepage {...homeObjThree} />
        </>
    )
}

export default Services

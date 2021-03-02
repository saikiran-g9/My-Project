import React from 'react'
import Homepage from '../../Homepage'
import Pricing from '../../Pricing';
import { homeObjTwo } from "./Data";
function Products() {
    return (
        <>
            <Pricing />
            <Homepage {...homeObjTwo} />
        </>
    )
}

export default Products

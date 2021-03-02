import React from 'react'
import Homepage from '../../Homepage'
import Pricing from '../../Pricing';
import { homeObjFour } from "./Data";
function SignUp() {
    return (
        <>
            <Pricing />
            <Homepage {...homeObjFour} />
        </>
    )
}

export default SignUp

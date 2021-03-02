import React from 'react'
import Homepage from '../../Homepage'
import Pricing from '../../Pricing';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
function Home() {
    return (
        <>
            <Homepage {...homeObjOne} />
            <Homepage {...homeObjThree} />
            <Homepage {...homeObjTwo} />
            <Pricing />
            <Homepage {...homeObjFour} />
        </>
    )
}

export default Home

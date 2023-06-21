import React, { useContext } from 'react'
import { CalcContext } from '../Context/CalcContext';

const Screen = () => {

    const { calc } = useContext(CalcContext)

    return (
        <div className='screen'>Screen</div>
    )
}

export default Screen;
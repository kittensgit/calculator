import React, { useContext } from 'react';
import { Textfit } from 'react-textfit';

import { CalcContext } from '../Context/CalcContext';

const Screen = () => {
    const { calc } = useContext(CalcContext);

    return (
        <Textfit className="screen" max={70} mode={'single'}>
            {calc.num ? calc.num : calc.res}
        </Textfit>
    );
};

export default Screen;

import React, { useState } from 'react';
import { css } from '@emotion/core';

const Wave = () => {
    const [waves,setWaves] = useState(0);
    const label = `${waves} ${waves === 1 ? 'wave' : 'waves'}`

    return (
        <button
            css={css`
                border: 6px solid #708CA1;
                border-radius: 10px 10px 10px 10px;
                color: #1f4f73;
                font-size: 1.25rem;
            `}
            onClick= {() => setWaves(waves + 1)}
        >{label}</button>
    );
};

export default Wave;

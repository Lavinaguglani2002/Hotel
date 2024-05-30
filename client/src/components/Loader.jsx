import React, { useState } from 'react';
import { css } from '@emotion/react';
import { HashLoader } from 'react-spinners';

const Loader = () => {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#ffffff"); // Corrected color value

  const override = css`
    display: block;
    margin: 150px auto 0; /* Adjusted margin-top to 150px */
    border-color: red;
  `;

  return (
    <div className='sweet-loading text-center'>
      <HashLoader color={color} loading={loading} css={override} size={150} />
    </div>
  );
}

export default Loader;

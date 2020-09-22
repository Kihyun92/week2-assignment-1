import React from 'react';

import Count from './Count';
import Buttons from './Buttons';

export default function Page({ count, onClick }) {
  return (
    <div>
      <p>Hello,world!!!</p>
      <p>Hi!</p>
      <Count
        count={count}
        onClick={onClick}
      />
      <Buttons onClick={onClick} />
    </div>
  );
}

import React from 'react';
import Language from '../classes/Language';

export default function Home () {
  return (
    <div>
      {Language.take('underDevelopment')}
    </div>
  );
}

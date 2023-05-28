import Link from 'next/link';
import React from 'react';

import { CircularText } from './Icons';

const HireMe = () => {
  return (
    <div
      className="fixed left-4 bottom-4 
                    flex items-center justify-center overflow-hidden"
    >
      <div className="w-48 h-auto flex items-center justify-center relative">
        <CircularText
          className={'fill-dark animate-spin-slow dark:fill-light'}
        />
        <Link
          href="mailto:souvikroy1999ab@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 
          -translate-y-1/2 bg-dark text-light shadow-md border-solid border-dark w-20 h-20 rounded-full
          hover:text-dark hover:bg-light dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;

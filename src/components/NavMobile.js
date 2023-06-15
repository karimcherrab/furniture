import React from 'react';

import {navigation} from '../data'


const NavMobile = () => {
  return (
    <nav className='bg-white w-full h-full shadow-2xl'>
        <ul className='text-center h-full flex flex-col items-center justify-center gap-y-6'>
          {
            navigation.map((item , index)=>{
              return(
                <li>
                   <a className='capitalize text-xl font-medium' href="/furniture">
                        {item.name}
                      </a>
                </li>
              )
            })
          }
        </ul>
    </nav>
  )
};

export default NavMobile;

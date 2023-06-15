import React from 'react';

import {footer} from '../data'

import logo from '../assets/img/logo.svg'
const Footer = () => {
  return (
    <footer className='section bg-primary text-white'>
        <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row justify-between border-b
            border-opacity-75 border-gray-700 pb-7 lg:pb-14 mb-14
            '>
              <a className='mb-6 lg:mb-0' href='/furniture'>
                <img src={logo} alt=''/>
              </a>
              <div className='flex gap-x-4'>
                {
                  footer.social.map((item , index)=>{
                    return(
                      <div className='w-12 h-12 text-2xl bg-gray-700 
                      hover:bg-accent rounded-full flex justify-center 
                      items-center transition
                      
                      ' key={index}>
                          <a href='/furniture' >{item.icon}</a>
                      </div>
                    )
                  })
                }
              </div>
            </div>
           
        </div>
    </footer>
  )
};

export default Footer;

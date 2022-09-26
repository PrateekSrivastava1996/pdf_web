import React from 'react';
import Sidebar  from './SideBar';

const MainSideBar = ({children}) => {
    return (
        <div className='flex flex-col w-[100%] sm:flex-col  md:flex-col lg:flex-row  xl:flex-row '>
          
            <main className='shrink w-[100%] sm:w-[100%] md:w-[100%] lg:w-[80%] xl:w-[80%] '>
                {children}
            </main>
            <Sidebar />
        </div>
    );
}

export default MainSideBar;

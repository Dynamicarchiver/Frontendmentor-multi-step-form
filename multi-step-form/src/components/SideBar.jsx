import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


// const ListItems = (list) => {
//      
//     return (
         
//     )
// }


const SideBar = ({lists, active, setActive}) => {
    
  return (
    <div className="m-[20px] w-[30%] h-full  rounded-3xl bg-[url('/assets/images/bg-sidebar-desktop.svg')] bg-cover bg-bottom">
        <ul className='pt-[10%] pl-[10%] flex flex-col gap-[15px]'>
                {lists.map((list, i) => (
                    <div key={i} onClick={() => setActive(list.number)} className='flex gap-[15px]'>
            <button
             className={active === list.number ? 'rounded-full px-[18px]  bg-Light-blue text-Marine-blue' : 'px-[18px]  py-[12px] font-[700] text-Light-gray border-[3px] rounded-full'}>{list.number}</button>
            <div className='flex flex-col'>
                <h5 className='flex text-Pastel-blue uppercase' > Step {list.number}</h5>
                <h5 className='flex text-Magnolia uppercase text-[18px]'>{list.name}</h5>
            </div>
        </div>
        
    ))}
    </ul>
    </div>
  )
}

export default SideBar
 
// path : '/'
// path : 'plan'
// , path : 'add_ons
// path : 'summary'
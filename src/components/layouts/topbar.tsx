import React from 'react'
import {SiLoopback} from 'react-icons/si'
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import {IoMdNotificationsOutline} from 'react-icons/io'
import Profile from './Profile'

export default function Topbar() {
  return (
    <nav className="">
        <div className="bg-blue-500 py-1 px-5 flex justify-between items-center">
        <div className="leftTop flex gap-4 items-center">
            <div className="bg-black/10 p-2 rounded-full" style={{backdropFilter: 'blur(3rem)' }}>
            <SiLoopback className='text-4xl text-white' />
            </div>
            <h1 className='text-white'>Dep <span className='text-red-500 font-extrabold'>Wes</span>tore</h1>
        </div>
        <div className="rightTop text-white flex gap-5">
            My Hotel
            <AiOutlineQuestionCircle className='text-2xl' />
            <IoMdNotificationsOutline className='text-2xl' />
            <Profile />
        </div>
        </div>

        <div className="text-black justify-center items-center text-center grid mt-3">
        <ul className='flex gap-5 text-[16px]'>
            <li className='hover:border-b-[3px] hover:border-blue-800 cursor-pointer hover:transition-all'>Dashboard</li>
            <li className='hover:border-b-[3px] hover:border-blue-800 cursor-pointer hover:transition-all'>Room & Rates</li>
            <li className='hover:border-b-[3px] hover:border-blue-800 cursor-pointer hover:transition-all'>Distribution</li>
            <li className='hover:border-b-[3px] hover:border-blue-800 cursor-pointer hover:transition-all'>Direct Booking</li>
            <li className='hover:border-b-[3px] hover:border-blue-800 cursor-pointer hover:transition-all'>Reservation</li>
            <li className='hover:border-b-[3px] hover:border-blue-800 cursor-pointer hover:transition-all'>Insight</li>
            <li className='hover:border-b-[3px] hover:border-blue-800 cursor-pointer hover:transition-all'>Payments</li>
        </ul>
        </div>
    </nav>
  )
}
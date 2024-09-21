'use client';
import React from 'react';
import Image from 'next/image';
import logo from '../assets/logo.png';
import Link from 'next/link';
import backImgae from '../assets/back.webp';


function Header({whatpage}) {
    return (
        <div className='flex fixed flex-row items-center justify-between h-[12vh] bg-transparent backdrop-blur-md px-4 w-full top-0 left-0 shadow-lg z-50'>
            <div className="logo flex flex-row items-center">
                <Image src={logo} height={70} alt='logo' className='h-full p-2'/>
                <h2 className='text-2xl ml-3 font-bold font-serif text-white h-full '>Virtual Buddy</h2>
            </div>
            <nav className="flex flex-row items-center gap-5 text-white">

                {whatpage==="home"&&(<>
                <Link href='/login' className='p-2 bg-blue-500 text-white px-5 rounded-lg'>
                        Log In
                </Link></>
                )
                }

                {whatpage==="dashboard"&&(<>
                    <Link href='/dashboard'>
                        Roadmap
                    </Link>
                    <Link href='/course'>
                    Course
                    </Link>
                    <Link href='/' className='p-2 bg-blue-500 text-white px-5 rounded-lg'>
                        Log Out
                    </Link></>
                )
                }
            </nav>

        </div>
    )
}

export default Header;
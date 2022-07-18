import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring';
import NavLink from './NavLink';

function Navbar() {
    const router = useRouter();
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        if (window.innerWidth > 1023) setOpen(true);
    }, [])

    return (
        <nav className="<lg:(flex-col items-start gap-10) lg:(flex-row justify-between) flex select-none bg-white">
            <section className="<lg:(flex-col) lg:(flex-row) flex items-center">

                <div className="flex gap-4 items-center pl-2">
                    <i className="lg:(hidden) bi bi-list text-3xl" onClick={() => setOpen(!open)}></i>
                    <Link href="/">
                        <a>
                            <button className="<lg:(mt-2) lg:(mt-0) bg-red-500 text-white py-3 px-4 text-xl tracking-widest uppercase rounded-lg cursor-pointer rubik font-black"><img src="/assets/images/logo/logo.jpeg" className='w-36' /></button>
                        </a>
                    </Link>
                </div>
                {
                    open &&
                    <div className="<lg:(ml-8 gap-3 flex-col text-md) lg:(ml-10 gap-4 flex-row text-lg) flex uppercase tracking-wide">
                        <div className='mt-2' />
                        <NavLink value="products" link="/products" current={router.asPath} />
                        <NavLink value="contact us" link="/contactus" current={router.asPath} />
                        <NavLink value="about us" link="/aboutus" current={router.asPath} />
                    </div>
                }

            </section>
            {
                open &&
                <div className="sm:(w-full) lg:(w-max) bg-gray-700 px-8 py-2 rounded text-white flex gap-8 items-center justify-around flex-wrap rubik">
                   <a   href="https://goo.gl/maps/HZSrMBHMp9K4CYXG7" target="_blank"  rel="noreferrer">
                    <span className="flex flex-col items-center py-2 cursor-pointer hover:(text-red-500)" >
                        <i className="bi bi-geo text-3xl" ></i>
                        location
                    </span>
                   </a>

                    <Link href="/contactus">
                    <span className="flex flex-col items-center py-2 cursor-pointer hover:(text-red-500)">
                        <i className="bi bi-question-square text-3xl"></i>
                        Enquire Us
                    </span>
                    </Link>

                    <a href='tel:+91-9792979287'>
                    <span className="flex flex-col items-center py-2 cursor-pointer hover:(text-red-500)">
                        <i className="bi bi-telephone text-3xl"></i>
                        Call Us
                    </span></a>

                    {/* <label htmlFor="search-item" className="relative">
                        <input
                            id="search-item"
                            type="text"
                            className="@sm:(w-full) md:(w-36) text-black p-2 focus:outline-none rounded "
                        />
                        <button className="bi bi-search absolute px-4 py-2 right-0 rounded bg-gray-700 hover:text-red-500"></button>
                    </label> */}
                </div>
            }
        </nav>
    )
}

export default Navbar

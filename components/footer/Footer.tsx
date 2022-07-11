import Link from 'next/link'
import React from 'react'
import FooterDropLinks from './FooterDropLinks'
import footlinks from './footerlinks.json'

const Footer = () => {
    return (
        <div className='bg-gray-100 py-10'>
            <div className='<md:(px-5) container mx-auto flex flex-col'>
                <button className="<lg:(mt-2) lg:(mt-0) bg-red-500 text-white py-4 px-5 text-xl tracking-widest uppercase rounded-lg cursor-pointer rubik font-black self-start">Racold</button>
                <section className='<md:(flex-col) md:(flex-row) flex gap-5 justify-evenly my-10'>
                    {
                        footlinks.map((item, key) => (
                            <FooterDropLinks
                                topic={item.topic}
                                links={item.links}
                                key={key}
                            />
                        ))
                    }
                    <section className='flex flex-col gap-3'>
                        <span className='font-bold text-lg uppercase'>Contact Us</span>
                        <div>
                            <p>Ariston Thermo India Private Limited, </p>
                            <p>1st Floor, Office No. 103,</p>
                            <p>Mayfair Tower, Wakdewadi,</p>
                            <p>Shivajinagar Pune 411005</p>
                            <p>Maharashtra, India</p>


                            <p className='my-3'>CIN-123456789345678</p>

                            <p>Email: customer.care@racold.com</p>
                        </div>

                        <span className='font-bold text-lg uppercase mt-5'>Follow Us on</span>
                        <div className='flex gap-5'>
                            <i className='hover:(text-red-500) cursor-pointer bi bi-facebook'/>
                            <i className='hover:(text-red-500) cursor-pointer bi bi-twitter'/>
                            <i className='hover:(text-red-500) cursor-pointer bi bi-youtube'/>
                            <i className='hover:(text-red-500) cursor-pointer bi bi-linkedin'/>
                            <i className='hover:(text-red-500) cursor-pointer bi bi-whatsapp'/>
                        </div>
                    </section>
                </section>
                
                <section className='border-y border-gray-700 py-5 gap-3 flex <md:flex-col md:flex-row justify-between'>
                    <span className='text-sm text-gray-600'>More ways to shop: Find a Store near you. Or call 1860 425 2288 for enquiries</span>
                    <div className='flex gap-3 text-sm'>
                        <Link href="/privacy-poly">
                            <a><span className='uppercase'>Privacy Policy</span></a>
                        </Link>
                        <Link href="/privacy-poly">
                            <a><span className='uppercase'>Cookie Policy</span></a>
                        </Link>
                        <Link href="/privacy-poly">
                            <a><span className='uppercase'>Disclaimer Policy</span></a>
                        </Link>
                    </div>
                </section>
                <span className='self-end mt-5 text-gray-700'>All rights reserved by Someone Mags India Private Limited</span>
                <span className='self-end text-gray-700'>Made with <i className='bi bi-heart-fill text-red-500'/> by  <a href="https://www.griiken.com" className='font-bold text-red-500'>Griiken</a>.</span>
            </div>
        </div>
    )
}

export default Footer
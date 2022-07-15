import React from 'react'

const ContactUsMap = () => {
    return (
        <div className='<md:(px-5) container mx-auto py-10'>
            <span className='<md:(text-center) md:(text-start) text-6xl text-red-500'>Our Office</span>
            <div className='flex gap-10 mt-5 flex-wrap'>
                <section className='flex flex-col gap-3 w-[600px]'>
                    <div>
                    <h1 >KTS APPLIANCES PRIVATE LIMITED </h1>
                            <p>Plot No. 533, Near Mor Market,</p>
                            <p>Block B, Sector 56, </p>
                            <p>Gurugram (Haryana)- 122011</p>
                           


                    </div>
                    <p className='block'>CIN-U51909HR2022PTC105155</p>

                    <p className='block'>Email: <a href="mailto:customer.care@willerhot.com" target="_blank" >customer.care@willerhot.com </a></p>
                    <p> For enquiry call: <a href='tel:+91-9792979287'>+91-9792979287</a> (TOLL FREE) </p>

                    {/* <span className='font-bold text-lg uppercase mt-5'>Follow Us on</span>
                <div className='flex gap-5'>
                    <i className='hover:(text-red-500) cursor-pointer bi bi-facebook' />
                    <i className='hover:(text-red-500) cursor-pointer bi bi-twitter' />
                    <i className='hover:(text-red-500) cursor-pointer bi bi-youtube' />
                    <i className='hover:(text-red-500) cursor-pointer bi bi-linkedin' />
                    <i className='hover:(text-red-500) cursor-pointer bi bi-whatsapp' />
                </div> */}
                </section>
                <div className='border shadow rounded-lg overflow-hidden'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.780649409155!2d77.0954308156384!3d28.42587488249974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23f213c2fd97%3A0x93edf0356c7f8beb!2sKTS%20Appliances%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1657880661831!5m2!1sen!2sin"  width="800" height="450" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>
        </div>
    )
}

export default ContactUsMap
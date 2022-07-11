import React from 'react'

const ContactUsMap = () => {
    return (
        <div className='p-5 flex flex-col gap-5 items-center'>
            <span className='text-6xl text-red-500'>Our Office</span>
            <div className='border shadow rounded-lg overflow-hidden'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1884.6004678994354!2d75.7431918734938!3d26.914539966781163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db362209d8ecb%3A0xb9ded6835f239693!2sLinen%20Club%20Jaipur!5e0!3m2!1sen!2sin!4v1657552264245!5m2!1sen!2sin" width="600" height="450" allowFullScreen={true} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <section className='flex flex-col gap-3 w-[600px]'>
                <div className='flex flex-wrap'>
                    <p>Ariston Thermo India Private Limited, </p>
                    <p>1st Floor, Office No. 103, </p>
                    <p>Mayfair Tower, Wakdewadi, </p>
                    <p>Shivajinagar Pune 411005 </p>
                    <p>Maharashtra, India </p>


                </div>
                    <p className='block'>CIN-123456789345678</p>

                    <p className='block'>Email: customer.care@racold.com</p>

                {/* <span className='font-bold text-lg uppercase mt-5'>Follow Us on</span>
                <div className='flex gap-5'>
                    <i className='hover:(text-red-500) cursor-pointer bi bi-facebook' />
                    <i className='hover:(text-red-500) cursor-pointer bi bi-twitter' />
                    <i className='hover:(text-red-500) cursor-pointer bi bi-youtube' />
                    <i className='hover:(text-red-500) cursor-pointer bi bi-linkedin' />
                    <i className='hover:(text-red-500) cursor-pointer bi bi-whatsapp' />
                </div> */}
            </section>
        </div>
    )
}

export default ContactUsMap
import { FC } from 'react'
import product_cat from './product_category.json';
import products from './products.json';
import states from './States.json';
import { url } from 'inspector';

const ContactUsForm = () => {
    return (
        <section className='sm:(justify-center) lg:(justify-end) flex p-10'
            style={{
                backgroundImage: 'url(/assets/images/contactform/commercial-bg1.jpg)',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <form className='flex flex-col items-start justify-center gap-3 p-5 select-none w-86 bg-white rounded shadow border'>
                <span className='text-xl uppercase font-bold tracking-widest text-red-500'>Fill In Your Details</span>
                <input type="text" className='contactus-input' placeholder='Enter your name' />
                <input type="text" className='contactus-input' placeholder='Mobile number' />
                <input type="email" className='contactus-input' placeholder='Email ID' />

                <input type="text" className='contactus-input' list="product-cat" placeholder='Select Your Geyser' />
                <datalist id="product-cat">
                    {
                        product_cat.map(item => (
                            <option
                                value={item}
                                key={item}
                            >{item}</option>
                        ))
                    }
                </datalist>


                <input type="text" className='contactus-input' list="product-type" placeholder='Select Your Product' />
                <datalist id="product-type">
                    {
                        products.map(item => (
                            <option
                                value={item}
                                key={item}
                            >{item}</option>
                        ))
                    }
                </datalist>

                <input type="email" className='contactus-input' placeholder='Enter your Company/Business name' />

                <input type="text" className='contactus-input' list="states" placeholder='Select Your State' />
                <datalist id="states">
                    {
                        states.map(item => (
                            <option
                                value={item.value}
                                key={item.value}
                            >{item.state}</option>
                        ))
                    }
                </datalist>

                <textarea name="" id="" className='contactus-input' placeholder='Any Query'></textarea>

                <div className='inline-flex gap-2 my-3'>
                    <input type="checkbox" id="terms" className="accent-red-500" />
                    <label htmlFor="terms">I have red all the terms and conditions and privacy policies</label>
                </div>

                <button className='btn btn-red self-end'>Submit</button>
            </form>
        </section>
    )
}

export default ContactUsForm
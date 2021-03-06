import { FC, useState } from 'react'
import product_cat from './product_category.json';
import products from './products.json';
import states from './States.json';
import { url } from 'inspector';
import { toast, ToastContainer } from 'react-toastify';
import { submitQuery } from '../../utils/firebase/database/adminAuth';

const ContactUsForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('')
    const [geaserCat, setGeaserCat] = useState('');
    const [company, setCompany] = useState("");
    const [state, setState] = useState('');
    const [query, setquery] = useState('');
    const [checked, setChecked] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (name.length < 3){
            toast.warning("Name too Short");
            return;
        }
        if (email.length < 3){
            toast.warning("Email too Short");
            return;
        }
        if (phone.length < 3){
            toast.warning("Phone too Short");
            return;
        }
        if (geaserCat.length < 3){
            toast.warning("Select geyser category");
            return;
        }
        if (query.length < 3){
            toast.warning("Enter query");
            return;
        }
        if (state.length < 3){
            toast.warning("Select state");
            return;
        }

        if (checked === false) {
            toast.warning("Please accept the terms and conditions");
            return;
        }

        const isSubmitted = await submitQuery(name, phone, email, geaserCat, company, state, query);
        if (isSubmitted) 
            toast("Submitted Successfully")
        else
            toast.error("Cannot submit")
    }

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
                <input type="text" className='contactus-input' placeholder='Enter your name' value={name} onChange={e => setName(e.target.value)}/>
                <input type="text" className='contactus-input' placeholder='Mobile number' value={phone} onChange={e => setPhone(e.target.value)}/>
                <input type="email" className='contactus-input' placeholder='Email ID' value={email} onChange={e => setEmail(e.target.value)}/>

                <input type="text" className='contactus-input' list="product-cat" placeholder='Select Your Geyser' value={geaserCat} onChange={e => setGeaserCat(e.target.value)}/>
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


                {/* <input type="text" className='contactus-input' list="product-type" placeholder='Select Your Product' />
                <datalist id="product-type">
                    {
                        products.map(item => (
                            <option
                                value={item}
                                key={item}
                            >{item}</option>
                        ))
                    }
                </datalist> */}

                <input type="text" className='contactus-input' placeholder='Enter your Company/Business name' value={company} onChange={e => setCompany(e.target.value)}/>

                <input type="text" className='contactus-input' list="states" placeholder='Select Your State' value={state} onChange={e => setState(e.target.value)}/>
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

                <textarea name="" id="" className='contactus-input' placeholder='Any Query' value={query} onChange={e => setquery(e.target.value)} ></textarea>

                <div className='inline-flex gap-2 my-3'>
                    <input type="checkbox" id="terms" className="accent-red-500" onChange={e => setChecked(e.target.checked)} />
                    <label htmlFor="terms">I have red all the terms and conditions and privacy policies</label>
                </div>

                <button className='btn btn-red self-end' onClick={handleSubmit}>Submit</button>
            </form>
        </section>
    )
}

export default ContactUsForm
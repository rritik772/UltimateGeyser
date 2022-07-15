import React, { useEffect, useState } from 'react'
import AdminNavbar from '../../components/admin/adminNavbar/AdminNavbar'
import { toast } from 'react-toastify';
import { addProducts } from '../../utils/firebase/database/productsDatabase';
import { addProductsImages } from '../../utils/firebase/storage/productStorage';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState<number>();
    const [discount, setDiscount] = useState<number>();
    const [desc, setDesc] = useState('');
    const [imgs, setImgs] = useState<FileList>()
    const [loading, setLoading] = useState(false);

    const handleImages = (e) => {
        setLoading(true);

        if (!e.target.files[0]) return;

        for (let img of e.target.files) {
            if (parseFloat((img.size / (1024 * 1024)).toFixed(1)) > 0.50) {
                toast.error('File size too large');
                return;
            }
        }

        console.log(e.target.files)
        setImgs(e.target.files);

        setLoading(false);
    }

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        if (name.length < 3) {
            toast.error("Name length is too short.");
            return;
        } else if (!price) {
            toast.error("Please enter valid price");
            return;
        } else if (!discount) {
            toast.error("Please enter valid discount");
            return;
        } else if (desc.length < 5) {
            toast.error("Description too short");
            return;
        } else if (imgs && imgs.length < 1) {
            toast.error("Please upload atleast one image")
            return;
        }

        let isProdAdded = await addProducts({ name, price, discount, desc });
        let isImageUploaded = await addProductsImages(imgs!, name);

        if (isProdAdded && isImageUploaded) toast.success("Product added successfully")
        else if (isProdAdded) toast.warning("Product is added but images can't be uploaded.")
        else toast.error("Something went wrong.")

        setLoading(false);
    }

    return (
        <div>
            <AdminNavbar />

            <form className='<md:(grid-cols-1 w-full) md:(grid-cols-2 w-[35rem]) grid bg-gray-100 p-5 shadow mx-auto gap-2 rounded-lg'>
                <section className='flex flex-col gap-3'>
                    <input type="text" className="contactus-input" placeholder='Product Name' value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="number" className="contactus-input" placeholder='Normal Price' value={price} onChange={e => setPrice(parseInt(e.target.value))} />
                    <input type="number" className="contactus-input" placeholder='Discount (%)' value={discount} onChange={e => setDiscount(parseFloat(e.target.value))} />
                    <textarea className="contactus-input" placeholder='Description' value={desc} onChange={e => setDesc(e.target.value)} />
                </section>
                <section className='flex flex-col gap-2'>
                    <div className='h-full border border-red-500 rounded-lg p-1 text-center flex flex-col'>
                        {
                            (imgs && imgs.length > 0) ?
                                Array.from(imgs).map((img, key) => (
                                    <span key={key}>{img.name.substring(0, 20)}...</span>
                                )) :
                                <span>No Images Uploaded</span>
                        }
                    </div>
                    <label htmlFor="imgs" className="btn btn-red-outline cursor-pointer text-center rounded-lg">
                        <span>Add Images</span>
                        <input type="file" accept="image/jpeg" className='hidden' id="imgs" multiple onChange={(e) => handleImages(e)} />
                    </label>
                </section>
                {
                    loading ?
                        <i className='bi bi-arrow-clockwise animate-spin col-span-2 justify-self-center text-4xl mt-3 text-red-500' /> :
                        <button className='btn btn-red-outline col-span-2 mt-3' onClick={handleSubmit} disabled={loading}>
                            Submit
                        </button>
                }
            </form>
        </div>
    )
}

export default AddProduct
import React, { useEffect, useState } from 'react'
import AdminNavbar from '../../components/admin/adminNavbar/AdminNavbar'
import { toast } from 'react-toastify';
import { addProducts } from '../../utils/firebase/database/productsDatabase';
import { addProductsImages } from '../../utils/firebase/storage/productStorage';
import { ProductModal } from '../../models/product/product-modal';
import { ProductErrorModal } from '../../models/error/errorModal';
import { getFromLocalStorage, login } from '../../utils/firebase/database/adminAuth';
import { useRouter } from 'next/router';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState<number>();
    const [discount, setDiscount] = useState<number>();
    const [desc, setDesc] = useState('');
    const [imgs, setImgs] = useState<FileList>()
    const [loading, setLoading] = useState(false);
    const [featuredProduct, setFeaturedProduct] = useState(false);
    const [colors, setColors] = useState<string[]>([]);
    const [capacity, setCapacity] = useState<string[]>([])
    const [loginLoading, setLoginLoading] = useState(false);

    const handleImages = (e: any) => {
        setLoading(true);

        if (!e.target.files[0]) return;

        for (let img of e.target.files) {
            if (parseFloat((img.size / (1024 * 1024)).toFixed(1)) > 0.50) {
                setLoading(false);
                toast.error('File size too large');
                return;
            }
        }

        console.log(e.target.files)
        setImgs(e.target.files);

        setLoading(false);
    }

    const handleSubmit = async (e: any) => {
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
        } else if (capacity.length < 1) {
            toast.error("Please enter atleast one capacity")
            return;
        } else if (colors.length < 1) {
            toast.error("Please enter atleast one color.")
            return;
        }

        let isProdAdded: ProductErrorModal = await addProducts(
            new ProductModal(
                name,
                price,
                discount,
                desc,
                featuredProduct,
                colors,
                capacity,
                undefined
            )
        );

        if (isProdAdded.type) {
            let isImageUploaded = await addProductsImages(imgs!, isProdAdded.additional!.uid!);
            if (isImageUploaded)
                toast.success("Product added successfully")
            else
                toast.warning("Product is added but images can't be uploaded.")
        } else toast.error("Something went wrong.")

        setLoading(false);
    }

    const router = useRouter()

    useEffect(() => {
        async function loginUser() {
            setLoginLoading(true);

            let json = getFromLocalStorage();
            let loggedIn = await login(json.username, Buffer.from(json.password, 'base64').toString('ascii'));
            console.log(loggedIn)
            if (!loggedIn) {
                router.push('/admin/login')
            }

            setLoginLoading(false);
        }
        loginUser();
    }, [])

    return (
        <div>
            <AdminNavbar />

            {!loginLoading && <form className='<md:(grid-cols-1 w-full) md:(grid-cols-2 w-[40rem]) grid bg-gray-100 p-5 shadow mx-auto gap-2 rounded-lg'>
                <section className='flex flex-col gap-3'>
                    <input type="text" className="contactus-input" placeholder='Product Name' value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="number" className="contactus-input" placeholder='Normal Price' value={price} onChange={e => setPrice(parseInt(e.target.value))} />
                    <input type="number" className="contactus-input" placeholder='Discount (%)' value={discount} onChange={e => setDiscount(parseFloat(e.target.value))} />
                    <textarea className="contactus-input" placeholder='Description' value={desc} onChange={e => setDesc(e.target.value)} />

                </section>
                <section className='flex flex-col gap-3'>
                    <div className=''>
                        {/* <span>Capacity Available</span> */}
                        <input type="text" className="contactus-input" placeholder='Capacity Available separate by `,`' value={capacity.join(',')} onChange={(e) => setCapacity(e.target.value.split(','))} />
                    </div>
                    <div className=''>
                        {/* <span>Colours Available</span> */}
                        <input type="text" className="contactus-input" placeholder='Colors available separate by `,`' value={colors.join(',')} onChange={(e) => setColors(e.target.value.split(','))} />
                    </div>
                    <div className='select-none py-3 px-1'>
                        <input type="checkbox" id="featuredProduct" className='accent-red-500 mr-2' checked={featuredProduct} onChange={() => setFeaturedProduct(!featuredProduct)} />
                        <label htmlFor="featuredProduct">Featured Product</label>
                    </div>

                    {/* <div className='h-full border border-red-500 rounded-lg p-1 text-center flex flex-col'>
                        {
                            (imgs && imgs.length > 0) ?
                                Array.from(imgs).map((img, key) => (
                                    <span key={key}>{img.name.substring(0, 20)}...</span>
                                )) :
                                <span>No Images Uploaded</span>
                        }
                    </div> */}
                    <label htmlFor="imgs" className="btn btn-red-outline cursor-pointer text-center rounded-lg">
                        <span>Add Images ({imgs && imgs.length})</span>
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
            </form> }
        </div>
    )
}

export default AddProduct
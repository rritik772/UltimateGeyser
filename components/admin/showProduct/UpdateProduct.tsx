import React, { useState, FC } from 'react'
import { toast } from 'react-toastify';
import { ProductModal } from '../../../models/product/product-modal';
import { updateProduct } from '../../../utils/firebase/database/productsDatabase';
import { addProductsImages, deleteImages } from '../../../utils/firebase/storage/productStorage';

interface UpdateProductProps {
    product: ProductModal
}

const UpdateProduct: FC<UpdateProductProps> = ({ product }) => {
    const [name, setName] = useState(product.name);
    const [price, setPrice] = useState<number>(product.price);
    const [discount, setDiscount] = useState<number>(product.discount);
    const [desc, setDesc] = useState(product.desc);
    const [imgs, setImgs] = useState<FileList>()
    const [featuredProduct, setFeaturedProduct] = useState(false);
    const [loading, setLoading] = useState(false);

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
        }

        let isProdUpdated = await updateProduct(new ProductModal(name, price, discount, desc, featuredProduct ), product.uid! as string)

        if (isProdUpdated.type) {
            if (imgs && imgs!.length > 0) {
                toast.info("Old images is to be deleted.")
                const isDeleted = await deleteImages(product.uid! as string);
                if (isDeleted) {
                    toast.info("Old images deleted.")
                    let isImageUploaded = await addProductsImages(imgs!, product.uid! as string);
                    if (isImageUploaded)
                        toast.success("Product updated successfully")
                } else {
                    toast.error("Cannot delete old images");
                    toast.error("Cannot update product");
                }
            } else {
                toast.success("Product updated successfully");
            }
        } else {
            toast.error("Cannot update product");
        }

        setLoading(false);
    }
    return (
        <form className='<md:(grid-cols-1 w-full) md:(grid-cols-2 w-[35rem]) grid bg-gray-100 p-5 shadow mx-auto gap-2 rounded-lg mt-3'>
            <section className='flex flex-col gap-3'>
                <input type="text" className="contactus-input" placeholder='Product Name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="number" className="contactus-input" placeholder='Normal Price' value={price} onChange={e => setPrice(parseInt(e.target.value))} />
                <input type="number" className="contactus-input" placeholder='Discount (%)' value={discount} onChange={e => setDiscount(parseFloat(e.target.value))} />
                <textarea className="contactus-input" placeholder='Description' value={desc} onChange={e => setDesc(e.target.value)} />

                <div className='select-none'>
                    <input type="checkbox" id="featuredProduct" className='accent-red-500 mr-2' checked={featuredProduct} onChange={() => setFeaturedProduct(!featuredProduct)}/>
                    <label htmlFor="featuredProduct">Featured Product</label>
                </div>
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

    )
}

export default UpdateProduct
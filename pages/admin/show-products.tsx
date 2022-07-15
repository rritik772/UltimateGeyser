import React, { useEffect, useState } from 'react'
import AdminNavbar from '../../components/admin/adminNavbar/AdminNavbar'
import { toast } from 'react-toastify';
import { ProductModal } from '../../models/product/product-modal'
import { getProducts } from '../../utils/firebase/database/productsDatabase'
import SingleProduct from '../../components/admin/showProduct/SingleProduct';
import { getProductImages } from '../../utils/firebase/storage/productStorage';

const ShowProducts = () => {
    const [products, setProducts] = useState<ProductModal[]>([]);
    const [downloadableURLs, setDownloadableURLs] = useState<any>([]);
    const [loading, setLoading] = useState(false);

    const handleGetProducts = async () => {
        setLoading(true);

        await getProducts()
            .then((p) => setProducts(p))
            .catch(() => toast.error("Something went wrong."))

        for (let e of products) {
            const urls = await getProductImages(e.name);
            setDownloadableURLs([...downloadableURLs, urls])
        }
        setLoading(false);
    }

    useEffect(() => {
        handleGetProducts();
    }, [])

    return (
        <div>
            <AdminNavbar />
            {
                loading ? <span className='bi bi-circle-arrow-right'></span> :
                    <section className='container mx-auto flex flex-col gap-1'>
                        <section className='<md:(grid-cols-1) md:(grid-cols-5) grid rounded-lg shadow bg-gray-100 p-5 rounded-lg w-full justify-items-center mb-2'>
                            <span>Name</span>
                            <span>Description</span>
                            <span>Discount</span>
                            <span>Discounted Price</span>
                            <span>MRP</span>
                        </section>
                        {
                            products.map((item, key) => (
                                <SingleProduct product={item} key={key} downloadableURLs={downloadableURLs[key]} />
                            ))
                        }
                    </section>
            }
        </div>
    )
}

export default ShowProducts
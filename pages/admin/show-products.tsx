import React, { useEffect, useState } from 'react'
import AdminNavbar from '../../components/admin/adminNavbar/AdminNavbar'
import { toast } from 'react-toastify';
import { ProductModal } from '../../models/product/product-modal'
import { getProducts } from '../../utils/firebase/database/productsDatabase'
import SingleProduct from '../../components/admin/showProduct/SingleProduct';
import { getProductImages } from '../../utils/firebase/storage/productStorage';
import { useRouter } from 'next/router';
import { getFromLocalStorage, login } from '../../utils/firebase/database/adminAuth';

const ShowProducts = () => {
    const [products, setProducts] = useState<ProductModal[]>([]);
    const [downloadableURLs, setDownloadableURLs] = useState<any>([]);
    const [loading, setLoading] = useState(false);
    const [loginLoading, setLoginLoading] = useState(false);

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

    const router = useRouter()
    useEffect(() => {
        async function loginUser() {
            setLoginLoading(true);

            let json = getFromLocalStorage();
            let loggedIn = await login(json.username, Buffer.from(json.password, 'base64').toString('ascii'));
            if (!loggedIn) {
                router.push('/admin/login')
            }

            setLoginLoading(false);
        }
        loginUser();

        handleGetProducts();
    }, [])

    return (
        <div>
            <AdminNavbar />
            {
                loading && loginLoading ? <span className='bi bi-circle-arrow-right'></span> :
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
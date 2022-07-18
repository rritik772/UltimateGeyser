import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

interface AdminNavLinkProps {
    value: string
    endpoint: string
    icon: string
    current: string
}

const AdminNavLink: FC<AdminNavLinkProps> = ({ value, endpoint, icon, current }) => {
    return (
        <Link href={endpoint}>
            <a>
                <span className={`<md:(flex-row gap-3) md:(flex-col) hover:(bg-red-500 text-white shadow) px-4 py-2 rounded-lg duration-300 flex items-center ${current === endpoint && 'border border-red-500'}`}>
                    <i className={`bi bi-${icon}`} />
                    <span>{value}</span>
                </span>
            </a>
        </Link>
    )
}

const AdminNavbar = () => {
    const router = useRouter();

    return (
        <nav className='<md:(px-3 flex-col items-start) md:(flex-row items-center) container mx-auto bg-gray-100 m-5 rounded-lg flex justify-between shadow'>
            <div className="flex gap-4 items-center p-5">
                {/* <i className="lg:(hidden) bi bi-list text-3xl" onClick={() => { }}></i> */}
                <Link href="/">
                    <a>
                        <button className="<lg:(mt-2) lg:(mt-0) bg-red-500 text-white py-3 px-4 text-xl tracking-widest uppercase rounded-lg cursor-pointer rubik font-black"><img src="/assets/images/logo/logo.jpeg" className='w-36' /></button>
                    </a>
                </Link>
            </div>

            <section className='<md:(flex-col ml-3 mb-3) md:(flex-row) flex gap-3 mr-5'>
                <AdminNavLink current={router.asPath} value="Customer Site" endpoint='/' icon='shop-window' />
                <AdminNavLink current={router.asPath} value="Login" endpoint='/admin/login' icon="box-arrow-in-right" />
                <AdminNavLink current={router.asPath} value="Add Product" endpoint='/admin/add-product' icon="plus-square" />
                <AdminNavLink current={router.asPath} value="Show Products" endpoint='/admin/show-products' icon="view-list" />
                <AdminNavLink current={router.asPath} value="Update Content" endpoint='/admin/update-content' icon="brush" />
            </section>
        </nav>
    )
}

export default AdminNavbar
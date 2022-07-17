import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import AdminNavbar from '../../components/admin/adminNavbar/AdminNavbar'
import { login, saveToLocalStorage } from '../../utils/firebase/database/adminAuth';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    async function loginAdmin() {
        if (username.length < 3) {
            toast.error('Username too short')
            return;
        } else if (password.length < 3) {
            toast.error('Password too short')
            return;
        }
        const isLoggedIn = await login(username, password);
        if (isLoggedIn){
            saveToLocalStorage(username, password);
            router.push('/admin/add-product')
            return;
        }

        toast.error("Wrong Password")
    }

    useEffect(() => {
    }, [])
    return (
        <div>
            <AdminNavbar />
            <section className='flex flex-col w-[35rem] mx-auto items-center gap-2 p-5 border border-red-500 bg-gray-100 rounded-lg shadow'>
                <span className='text-4xl text-center font-bold mb-3 tracking-wide'>LOGIN</span>
                <input type='text' className='contactus-input' placeholder='username' value={username} onChange={e => setUsername(e.target.value)} />
                <input type='password' className='contactus-input' placeholder='password' value={password} onChange={e => setPassword(e.target.value)} />
                <button className='btn btn-red-outline mt-2' onClick={loginAdmin}>Submit</button>
            </section>
        </div>
    )
}

export default Login
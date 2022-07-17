import React, { useEffect, useState } from 'react'
import AdminNavbar from '../../components/admin/adminNavbar/AdminNavbar'
import AddCarousalImages from '../../components/admin/updateContent/AddCarousalImages'
import { useRouter } from 'next/router';
import { getFromLocalStorage, login } from '../../utils/firebase/database/adminAuth';

const UpdateContain = () => {
    const [loginLoading, setLoginLoading] = useState(false);
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

    }, [])
  return (
    <div>
        <AdminNavbar />
        { !loginLoading && <AddCarousalImages /> }
    </div>
  )
}

export default UpdateContain
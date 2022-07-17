import { collection, getDoc, getDocs, where, query } from "firebase/firestore"
import { database } from "../../../firebase"
import { sha256 } from 'js-sha256';

export const login = async (user: string, password: string): Promise<boolean> => {
    return await getDocs(query(collection(database, 'info'), where('username', '==', 'admin')))
        .then((docs) => {
            let doc = docs.docs[0].data();
            let hashed = sha256(password);
            if (hashed === doc.password && user == doc.username)
                return true;
            else
                return false;
        })
        .catch(() => false)
}

export const saveToLocalStorage = (user: string, pass: string) => {
    const json = JSON.stringify({
        username: user,
        password: Buffer.from(pass).toString('base64')
    });

    localStorage.setItem('info', Buffer.from(json).toString('base64'));
}

export const getFromLocalStorage = () => {
    const localS = localStorage.getItem('info');
    if (!localS) return {};

    const local = Buffer.from(localS, 'base64').toString('ascii');
    const json = JSON.parse(local);
    return json;
}
import { QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore"

export interface ProductModal {
    name: string
    price: number
    discount: number
    desc: string
}

export const ProductConverter = {
    toFirebase: (prod: ProductModal) => {
        return {
            name: prod.name,
            price: prod.price,
            discount: prod.discount,
            desc: prod.desc
        }
    },
    fromFirestore: (snapshot: QueryDocumentSnapshot, options: SnapshotOptions) => {
        const data = snapshot.data(options);
        return {
            name: data.name,
            price: data.price,
            discount: data.discount,
            desc: data.desc
        }
    }
}
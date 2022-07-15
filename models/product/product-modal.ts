import { FieldValue, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore"

export class ProductModal {
    name: string
    price: number
    discount: number
    desc: string
    featuredProduct: boolean
    uid: string | undefined | FieldValue

    constructor(name: string, price: number, discount: number, desc: string, featuredProduct: boolean, uid?: string) {
        this.name = name;
        this.price = price ;
        this.discount = discount;
        this.desc = desc;
        this.featuredProduct = featuredProduct;
        this.uid = uid;
    }
}

export const ProductConverter = {
    toFirestore: (prod: ProductModal) => {
        return {
            name: prod.name,
            price: prod.price,
            discount: prod.discount,
            desc: prod.desc,
            featuredProduct: prod.featuredProduct,
            uid: undefined
        }
    },
    fromFirestore: (snapshot: QueryDocumentSnapshot, options: SnapshotOptions) => {
        const data = snapshot.data(options);
        return {
            name: data.name,
            price: data.price,
            discount: data.discount,
            desc: data.desc,
            featuredProduct: data.featuredProduct,
            uid: snapshot.id as string
        }
    }
}
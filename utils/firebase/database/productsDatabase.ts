import {
  doc,
  setDoc,
  getDoc,
  query,
  getDocs,
  collection,
  addDoc,
  where,
  DocumentSnapshot,
  deleteDoc,
} from "firebase/firestore";
import { database } from "../../../firebase";
import { ProductErrorModal } from "../../../models/error/errorModal";
import { ProductConverter, ProductModal } from "../../../models/product/product-modal";

export const addProducts = async (product: ProductModal): Promise<ProductErrorModal> => {
  return await addDoc(collection(database, "products"), {
    name: product.name,
    price: product.price,
    discount: product.discount,
    desc: product.desc,
    featuredProduct: product.featuredProduct,
    colors: product.colors,
    capacity: product.capacity,
    category: product.category,
    uid: "None"
  })
    .then((doc) => ({type: true, message: "Added Successfully", additional: {uid: doc.id}}))
    .catch(() => ({type: true, message: "Added Successfully"}));
};

export const updateProduct = async (product: ProductModal, uid: string): Promise<ProductErrorModal> => {
  console.log(uid)
  return await setDoc(doc(database, "products", uid), {
    name: product.name,
    price: product.price,
    discount: product.discount,
    desc: product.desc,
    featuredProduct: product.featuredProduct,
    colors: product.colors,
    capacity: product.capacity,
    category: product.category,
    uid: uid
  })
    .then(() => ({type: true, message: "Successfully updated"}))
    .catch(() => ({type: true, message: "Cannot update."}))
}

export const deleteProduct = async (uid: string): Promise<boolean> => {
  return await deleteDoc(doc(database, 'product', uid))
  .then(() => true)
  .catch(() => false);
}

export const getProducts = async (category?: string): Promise<ProductModal[]> => {
  let q = query(collection(database, "products").withConverter(ProductConverter));
  if (category)
    q = query(collection(database, "products").withConverter(ProductConverter), where("category", "==", category))

  return await getDocs(q)
    .then((docs) => {
      let result: ProductModal[] = [];

      docs.forEach((item) => {
        result.push(item.data() as ProductModal);
      });

      return result;
    })
    .catch(() => {
      console.log("Error occurred");
      return Promise.reject("Something went wrong");
    });
};


export const getFeaturedProduct = async (): Promise<ProductModal[]> => {
  return await getDocs(query(collection(database, "products").withConverter(ProductConverter), where('featuredProduct', '==', true)))
    .then((docs) => {
      const result: ProductModal[] = [];
      docs.forEach(doc => result.push(doc.data() as ProductModal))
      return result;
    })
    .catch((err) => {
      Promise.reject("Something went wrong.")
      console.log(err)
      return [];
    })
}
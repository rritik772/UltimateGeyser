import {
  doc,
  setDoc,
  getDoc,
  query,
  getDocs,
  collection,
  addDoc,
} from "firebase/firestore";
import { database } from "../../../firebase";
import { ProductErrorModal } from "../../../models/error/errorModal";
import { ProductConverter, ProductModal } from "../../../models/product/product-modal";

export const addProducts = async (product: ProductModal): Promise<ProductErrorModal> => {
  return await addDoc(collection(database, "products"), product)
    .then((doc) => ({type: true, message: "Added Successfully", additional: {uid: doc.id}}))
    .catch(() => ({type: true, message: "Added Successfully"}));
};

export const updateProduct = async (product: ProductModal, uid: string): Promise<ProductErrorModal> => {
  return await setDoc(doc(database, "products", uid), {
    name: product.name,
    price: product.price,
    discount: product.discount,
    desc: product.desc,
    featureProduct: product.featuredProduct,
    uid: uid
  })
    .then(() => ({type: true, message: "Successfully updated"}))
    .catch(() => ({type: true, message: "Cannot update."}))
}

export const getProducts = async (): Promise<ProductModal[]> => {
  return await getDocs(query(collection(database, "products").withConverter(ProductConverter)))
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

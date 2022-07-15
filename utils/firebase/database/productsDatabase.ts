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
import { ProductModal } from "../../../models/product/product-modal";

export const addProducts = async (product: ProductModal): Promise<boolean> => {
  return await addDoc(collection(database, "products"), product)
    .then(() => true)
    .catch(() => false);
};

export const getProducts = async (): Promise<ProductModal[]> => {
  return await getDocs(query(collection(database, "products")))
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

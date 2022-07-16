import { FirebaseError } from "firebase/app";
import { ref, uploadBytes, getBlob, listAll, getDownloadURL, deleteObject } from "firebase/storage";
import { storage } from "../../../firebase";

/**
 * It takes a FileList and a uid, and uploads each file in the FileList to the storage bucket, under
 * the products folder, and under the uid folder
 * @param {FileList} images - FileList - this is the list of images that you want to upload
 * @param {string} uid - The unique id of the product
 * @returns A boolean value.
 */
export const addProductsImages = async (images: FileList, uid: string) => {

  for (let image of Array.from(images)) {
    let value = await uploadBytes(ref(storage, `products/${uid}/${image.name}`), image)
    .then(() => {
        console.log(`file: ${image.name} uploaded`)
        return true;
    })
    .catch((err) => {
        console.log(err)
        return false;
    });

    if (value === false) return false;
  }

  return true;
};

/**
 * It deletes all images associated with a product
 * @param {string} uid - The unique identifier of the product.
 * @returns A boolean value.
 */
export const deleteImages = async (uid: string): Promise<boolean> => {
  const toBeDeletedRef = ref(storage, `products/${uid}`)
  return await deleteObject(toBeDeletedRef)
    .then(() => true)
    .catch((e: FirebaseError) => {
      if (e.code === 'storage/object-not-found') {
        return true;
      }
      return false;
    })
}


/**
 * It takes a product uid, and returns an array of image URLs
 * @param {string} uid - The uid of the product.
 */
export const getProductImages = async (uid: string): Promise<string[]> => {
  let result: string[] = [];

  const folderRef = ref(storage, `products/${uid}`)
  const filesList = await listAll(folderRef);

  
  for await (let item of filesList.items) {
    const fileRef = ref(storage, item.fullPath);
    let blob = await getDownloadURL(fileRef);
    result.push(blob);
  }

  return result;
} 
import { ref, uploadBytes, getBlob, listAll, getDownloadURL, deleteObject } from "firebase/storage";
import { storage } from "../../../firebase";

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

export const deleteImages = async (uid: string): Promise<boolean> => {
  const toBeDeletedRef = ref(storage, `products/${uid}`)
  return await deleteObject(toBeDeletedRef)
    .then(() => true)
    .catch(() => false)
}


export const getProductImages = async (name: string): Promise<string[]> => {
  let result: string[] = [];

  const folderRef = ref(storage, `products/${name}`)
  const filesList = await listAll(folderRef);

  
  await filesList.items.forEach(async (item) => {
    const fileRef = ref(storage, item.fullPath);
    let blob = await getDownloadURL(fileRef);
    result.push(blob);
  })

  return result;
} 
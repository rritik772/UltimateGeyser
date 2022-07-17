import { FirebaseError } from "firebase/app";
import { ref, uploadBytes, listAll, getDownloadURL, deleteObject } from "firebase/storage";
import { storage } from "../../../firebase";

export const updateCarousal = async (imgs: FileList) => {
  for (let image of Array.from(imgs)) {
    let value = await uploadBytes(ref(storage, `carousal/${image.name}`), image)
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
}

export const deleteCarousalImages = async (): Promise<boolean> => {
  const toBeDeletedRef = ref(storage, `carousal`)
  return await deleteObject(toBeDeletedRef)
    .then(() => true)
    .catch((e: FirebaseError) => {
      if (e.code === 'storage/object-not-found') {
        return true;
      }
      return false;
    })
}

export const getCarousalImages = async (): Promise<string[]> => {
  let result: string[] = [];

  const folderRef = ref(storage, `carousal`)
  const filesList = await listAll(folderRef);

  for await (let file of filesList.items) {
    const fileRef = ref(storage, file.fullPath);
    let blob = await getDownloadURL(fileRef);
    result.push(blob);

  }
  return result;
}

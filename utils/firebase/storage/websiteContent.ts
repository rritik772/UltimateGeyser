import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
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

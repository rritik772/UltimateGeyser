import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { deleteCarousalImages, updateCarousal } from '../../../utils/firebase/storage/websiteContent';

const AddCarousalImages = () => {
    const [imgs, setImgs] = useState<FileList>()
    const [imgUrls, setImgUrls] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    const handleImages = (e: any) => {
        setLoading(true);

        if (!e.target.files[0]) return;

        for (let img of e.target.files) {
            if (parseFloat((img.size / (1024 * 1024)).toFixed(1)) > 1) {
                setLoading(false);
                toast.error('File size too large');
                return;
            }
        }
        setImgs(e.target.files)
        setLoading(false);
    }
    const handleSubmit = async () => {
        if (imgs && imgs?.length > 0) {
            toast.info("Deleting Old Images");
            const isDeleted = await deleteCarousalImages();
            if (isDeleted) {
                toast("Deleted Old Images");
                const isUpdated = await updateCarousal(imgs!);
                if (isUpdated)
                    toast("Updated carousal images")
                else
                    toast.error("Cannot update carousal Images")
            } else {
                    toast.error("Cannot delete old carousal Images")
            }
        } else
            toast.info("Please add Images")

    }


    return (
        <div className='container mx-auto bg-gray-100 shadow rounded-lg p-5 flex flex-col items-start gap-3'>
            <section className='flex gap-2 p-3 border border-red-500 rounded-lg bg-white'>
                {
                    imgs && imgs.length > 0 && Array.from(imgs).map((item, key) => (
                        <div className='relative h-72 w-72' key={key}>
                            <Image src={URL.createObjectURL(item)} alt="image" height="100%" width="100%" layout='responsive' />
                        </div>
                    ))
                }
            </section>
            <div className='flex gap-3'>

                <label htmlFor="imgs" className="btn btn-red-outline cursor-pointer text-center rounded-lg">
                    <span>Add Images</span>
                    <input type="file" accept="image/jpeg" className='hidden' id="imgs" multiple onChange={(e) => handleImages(e)} />
                </label>
                <button className='btn btn-red-outline' onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default AddCarousalImages
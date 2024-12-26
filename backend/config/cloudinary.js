import { v2 as cloudinary } from "cloudinary";

const cloudinaryConnect = () => {
    try {
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_NAME,
            api_key: process.env.CLOUDINARY_KEY,
            api_secret: process.env.CLOUDINARY_APIKEY,
        });
    } catch (error) {
        console.error("Cloudinary configuration error:", error);
    }
};

export default cloudinaryConnect;

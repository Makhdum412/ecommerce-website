import {v2 as cloudinary } from "cloudinary"

const connectCloudinary = async () => {

    // Check if Cloudinary credentials are provided
    if (!process.env.CLOUDINARY_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_SECRET_KEY) {
        console.log("⚠️  Cloudinary not configured - image uploads will not work");
        return;
    }

    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key:process.env.CLOUDINARY_API_KEY,
        api_secret:process.env.CLOUDINARY_SECRET_KEY
    })
    
    console.log("✅ Cloudinary connected successfully");
}

export default connectCloudinary;
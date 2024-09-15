// Cloudinary Cofiguration

import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
})

const uploadOnCloudinary = async(localFilePath)=>{
    try {
        if(!localFilePath){
            return null;
        }
        // Upload file in Cloudinary
        const result = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        });
        // File has been uploaded successfully
        console.log("File is uploaded in Cloudinary");
        console.log(result.url)
        return result;
        
    } catch (error) {
        fs.unlinkSync(localFilePath)//remove locally saved temporary file as the upload operation failed
        return null
    }
}
export {uploadOnCloudinary}
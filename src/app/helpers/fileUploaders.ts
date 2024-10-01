import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { ICloudinaryRes, IFile } from "../interface/file";

// Configuration for Cloudinary
cloudinary.config({
    cloud_name: "dgak3ha1i",
    api_key: "172911419654983",
    api_secret: "8KCIwv6b63vh--oIHRbMjjfuejY",
});

// Use memory storage instead of disk storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Upload an image to Cloudinary
const uploadToCloudinary = (file: IFile): Promise<ICloudinaryRes> => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader
            .upload_stream((error, result) => {
                if (error) {
                    return reject(error);
                }
                if (result) {
                    resolve(result as unknown as ICloudinaryRes); // Type assertion
                } else {
                    reject(new Error("Cloudinary upload failed."));
                }
            })
            .end(file.buffer); // Upload directly from memory buffer
    });
};

export const fileUploader = {
    upload,
    uploadToCloudinary,
};

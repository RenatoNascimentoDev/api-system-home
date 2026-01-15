import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";

const storage = new GridFsStorage({
    url: process.env.MONGODB_URI,
    file: (req, file) => ({
        bucketName: "avatars",
        filename: `${Date.now()}-${file.originalnames}`
    })
});

export const uploadAvatar = multer({ storage });
import { Router } from "express";
import { uploadAvatar } from "../config/multer-gridfs.js";
import { getBucket, ObjectId } from "../config/gridfs.js";
import * as yup from "yup";
import { createUserBodySchema } from "../validators/user.validator.js";

const router = Router();

router.post("/users", async (req, res, next) => {
    try {
        const data = await createUserBodySchema.validate(req.body, { abortEarly: false, stripUnknown: true });
    } catch (err) {
        if (err instanceof yup.ValidationError) return res.status(400).json({ errors: err.errors });
        return next(err);
    }
})

router.patch("/users/avatar", uploadAvatar.single("avatar"), async (req, res) => {
    return res.status(200).json({ avatarId: req.file.id });
});

router.get("/files/:id", async (req, res) => {
    const bucket = getBucket("avatars");
    const id = new ObjectId(req.params.id);
    res.set("Content-Type", "image/jpeg");
    bucket.openDownloadStream(id).on("error", err => {
       return res.set(404).json({message: "File not found"}); 
    }).pipe(res)
});

export default router;
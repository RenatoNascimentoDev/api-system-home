import mongoose from "mongoose";

import { GridFSBucket, ObjectId } from "mongodb";

export function getBucket(bucketName = "avatars") {
    const db = mongoose.connection.db;
    if (!db) throw new Error("MongoDB not connected yet");
    return new GridFSBucket(db, { bucketName });
}

export { ObjectId };
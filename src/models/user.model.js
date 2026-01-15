import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        email: { type: String, required: true, trim: true, lowercase: true, unique: true, index: true  },
        password_hash: { type: String, required: true, select: false },
        role: { type: String, enum: ["ADMIN", "MEMBER"], default: "MEMBER" },
        avatar_id: { type: mongoose.Schema.Types.ObjectId, default: null },
    },
    { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

export default mongoose.model("User", userSchema);
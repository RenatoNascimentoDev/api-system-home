import express from "express";
import cors from "cors";
import helmet from "helmet";
import usersRoutes from "./routes/user.routes.js";

export const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(usersRoutes);

app.get("/health", (req, res) => res.json({ status: "ok" }));

app.use((req, res) => res.status(404).json({ message: "Not Found"}));

app.use((err, req, res, next) => {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
});
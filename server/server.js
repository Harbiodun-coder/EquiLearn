import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import materialRoutes from "./routes/materialRoutes.js";
import lessonRoutes from "./routes/lessonRoutes.js";
import path from "path";
import { fileURLToPath } from "url";
dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173", // Vite default dev port
    credentials: true,
  })
);
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));


// DB connection
connectDB();

// Routes
app.use("/api/users", userRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/materials", materialRoutes);
app.use("/api/lessons", lessonRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

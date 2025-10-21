import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import roadmapsRoutes from "./routes/roadmapsRoutes.js";


// Load environment variables from .env file
const PORT = 3000;
dotenv.config();

const app = express();

app.use(cors({origin:"http://localhost:5173"}));
app.use(express.json());

app.use('/api/roadmaps',roadmapsRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
    
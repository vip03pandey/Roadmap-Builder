import express from "express";
import cors from "cors";
import dotenv from "dotenv";


// Load environment variables from .env file
const PORT = 3000;
dotenv.config();

const app = express();

app.use(cors({origin:"http://localhost:5173"}));
app.use(express.json());

app.get('/api/roadmaps',(req,res)=>{
    res.json({message:"Roadmaps"})
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
    
import express from 'express';
import cookieParser from "cookie-parser";
import cors from 'cors'; // Import cors middleware
import authRoutes from "./routes/auth.js"

const app = express();
const port = 3000;

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:5173', // Replace with your frontend domain
  credentials: true, // Allow cookies to be sent
};

app.use(cors(corsOptions)); // Use CORS with specified options
app.use(cookieParser()); // For parsing cookies
app.use(express.json()); // For parsing application/json

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

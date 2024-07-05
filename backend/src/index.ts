import express from 'express';
import cookieParser from "cookie-parser";
const app = express();
const port = 3000;
import authRoutes from "./routes/auth.js"
app.use(cookieParser()); // for parsing cookies
app.use(express.json()); // for parsing application/json




app.use("/api/auth",authRoutes);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
 
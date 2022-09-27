import express from "express";
import cors from "cors";
import GraduateRoute from "./routes/GraduateRoute.js";


const app = express();
app.use(cors());
app.use(express.json());
app.use(GraduateRoute);



app.listen(5000, () => console.log('Server is up and running...'));


import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import noderoutes from './routes/node.js'

const app= express();
dotenv.config();
app.use(bodyParser.json({limit: '30mb',extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb",extended: true}));

app.use(cors());

app.use('/tree',noderoutes);

app.get("/",(req,res)=>{
    res.send(`Welcome to the Ajay Kumar`);

})

const PORT= process.env.PORT || 3000;
mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser: true,useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
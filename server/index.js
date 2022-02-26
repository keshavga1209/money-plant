require("dotenv").config();
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

import ConnectDB from "./database/connection";

import googleAuthConfig from "./config/google.config";

const app = express();
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(passport.initialize());

import Auth from "./API/Auth";

googleAuthConfig(passport);

app.use("/auth", Auth);

app.listen(4000, () => {
    ConnectDB()
        .then(() => {
            console.log("Server is running !!!");
        })
        .catch((error) => {
            console.log("Server is running, but database connection failed...");
            console.log(error);
        });
});
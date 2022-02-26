import mongoose from "mongoose";

export default async () => {
    return mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB CONNECTED"))
  .catch(() => console.log("FAILED TO CONNET WITH DB"));

};
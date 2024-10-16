// require("dotenv").config({ path: "./env" }); correct
import 'dotenv/config';
import {app} from "./app.js";
import connectDB from "./db/index.js";
connectDB().then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port 3000`);
  })
}).catch((error) => {
  console.log("DB connection failed", error); 
})

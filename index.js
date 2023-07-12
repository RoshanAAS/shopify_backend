const express = require("express");
require("dotenv").config();
const { connection } = require("./config/db");
const { userRouter } = require("./routes/users.route");
const cors=require("cors")



const app = express();
 app.use(cors())
 app.use(express.json());





app.use("/users", userRouter);



app.listen(process.env.port, async () => {
  try {
    await connection;

    console.log("server has connected to DB");
  } catch (error) {
    console.log(error.message);
  }
});

// IMPORTS FROM PACKAGES
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");


// IMPORTS FORM OTHER FILES
dotenv.config({ path: "./config.env" });
const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin");
const productRouter = require("./routes/product");

// INIT
const app = express();
const PORT = process.env.PORT || 3000;
// const DB = process.env.DATABASE;

// Database Connection
require("./db/conn");

// MIDDLEWARE
// CLIENT -> MIDDLEWARE -> SERVER -> CLIENT
app.use(cors());
app.use(express.json());


// Link Routes files
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);


// Creating API
// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Connected at port ${PORT}`);
});

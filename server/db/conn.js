const { default: mongoose } = require("mongoose");

const dbURI = process.env.DATABASE;

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
  })
  .then((result) => {
    // app.listen(port);
    console.log(`connected to db and listening...`);
  })
  .catch((err) => {
    console.log("Connection Error");
    console.log(err);
  });

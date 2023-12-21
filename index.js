const express = require("express");
const cors = require('cors')
const { forumRouter } = require("./routers");

const app = express();
app.use(express.json());


// app.use(cors())



app.use("/forum", forumRouter);


const port = 8000;

app.get("/", (req, res) => {
  res.send("Helo BackEnd Pethub");
});



app.listen(port, () => {
  console.log(`Port Active on @${port}`);
});
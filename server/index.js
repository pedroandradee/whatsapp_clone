const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const routes = require("./routes");

require("./src/database");

app.use(express.json());
app.use(cors());
app.use(routes);


app.listen(process.env.PORT || 5000, ()=>{
    console.log("Beckend is RUNNING!");
});
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const app = express();


const todo = require("./routes/todo");

connectDB();


app.use(cors());

app.use(express.json());
app.get("/", (req, res) => res.send("WELCOME TO TODO APP"));


app.use("/api/todo", todo);



const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});

require("dotenv").config();
const express = require('express');
const cors = require('cors')
const app = express();
const authMiddleware = require('./server/middleware/authMiddleware');
const port = 4000;

//  express json middleware

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// db connection

const pool = require('./server/db/dbConfig');

// user,questions and answers  routes middleware file

const userRouter =require("./server/routes/userRout")
const questionRouter =require("./server/routes/questionRout")
const answerRouter = require('./server/routes/answerRout') 

// user,question and answers  route middlewares respectively

app.use("/api/users", userRouter) 
app.use("/api/questions", authMiddleware, questionRouter);
app.use("/api/answers", authMiddleware, answerRouter);

async function start() {
    try {
        const result = await pool.execute("select 'test' ")
        await app.listen(port)
        console.log("database connection established")
        console.log(`listening at http://localhost:${port}`);
        // console.log(result)
    } catch (error) {
        console.log(error.message);      
    }   
}
start()

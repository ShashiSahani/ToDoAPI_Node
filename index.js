 const express = require('express');
const bodyParser=require('body-parser');
const tasksRoutes=require('./routes/task');


const app=express();

app.use(bodyParser.json());


app.use("/api/tasks",tasksRoutes);
const PORT=3111;

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})
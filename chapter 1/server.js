const express = require('express');

const app = express(); // creating server instance

// in express, data from frontend is accessed though req.
// res used to send data from backend to frontend
app.get("/", (req, res) => {
  res.send("Hello World")
})

app.get("/about", (req,res)=>{
  res.send("About Page")
})
app.listen(3000); // starting server and using port 3000
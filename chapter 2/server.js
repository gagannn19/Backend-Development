// The work of this file is to start the server.

const app = require('./src/app');

// .listen is a method used to start the server
app.listen(3000, ()=>{
  console.log("server is running on port 3000");
})
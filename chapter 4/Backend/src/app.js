const express = require('express'); 
const multer = require('multer'); // used to read the file
const uploadFile = require('./services/storage.service');
const postModel = require("./models/post.model");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({})

app.post('/create-post', upload.single("image"), async (req,res)=>{
  console.log(req.body);
  console.log(req.file);

  const result = await uploadFile(req.file.buffer);
  const post = await postModel.create({
     image:result.url,
     caption:req.body.caption
  })
  return res.status(201).json({
    message : "post created successfully",
    post 
  })
  console.log(result);
})

app.get("/posts", async(req, res) => {
  const posts = await postModel.find()

  return res.status(200).json({
    posts : posts
  })
})

module.exports = app;
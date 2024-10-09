import express, { json } from "express"; //افضل من الريكواير 
import mongoose from "mongoose";
import Article from "./models/blog.js";
import dotenv from "dotenv"
dotenv.config()
const app = express()
app.use(express.json());

main().catch(err => console.log(err));


async function main() {
    await mongoose.connect(process.env.MONGO_URI);
    
  console.log("database///////////////");
  
  }



//get 
// app.get("/artical",(req,res)=>{
// const articals = new Article({
//     title:"hello",
//     body:"this is my body"
// })
// articals.save()
// .then((result)=>{
//     res.send(result)
// })

// })

app.get("/addArtical",(req,res)=>{
    Article.find()
    .then((articls)=>{
        res.send(articls)
    })
})


app.post("/addArtical",(req,res)=>{
    const artical = new Article({
        title:req.body.title,
        body:req.body.body,
        author:req.body.author,
        isEmployee: req.body.isEmployee,
    })
    artical.save()
.then((result)=>{
    res.send(result);
    
})
})

app.patch("/addArtical/:id",(req,res)=>{
const {id} = req.params
Article.findByIdAndUpdate(id , req.body,{new:true,runValidators:true})
.then((result)=>{
    res.send(result)
})
})


app.delete("/addArtical/:id",(req,res)=>{
    const {id}= req.params
    Article.findByIdAndDelete(id)
    .then((result)=>{
        res.send(result)

    })

})

app.get("/addArtical/:id",(req,res)=>{
const {id} = req.params
Article.findById(id)
.then((result)=>{
    res.send(result)
})

})



const port = 3000 

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);

    
})
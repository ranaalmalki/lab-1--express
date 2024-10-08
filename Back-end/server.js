import express from "express"; //افضل من الريكواير 
const app = express()

const port = 3000 

//get 
app.get("/",(req,res)=>{

    res.send("hello world")

})
app.use(express.json());

app.post("/userinfo",(req,res)=>{
    const name =req.body.name
    const email = req.body.email
    const password = req.body.password
    const username = {name,email,password}
    userinfo.push(username)
    res.json(username)

})

let userinfo=[]


app.get('/userinfo',(req,res)=>{
    res.json(userinfo)
})

app.delete("/userinfo/:name",(req,res)=>{
    const {name} = req.params;
    userinfo=userinfo.filter((e)=>e.name !==name)
    res.send(userinfo)



})



app.listen(port,()=>{

    
})
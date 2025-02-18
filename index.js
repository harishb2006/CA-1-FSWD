const express=require('express');
port=3000;

const app=express();
app.get("/",(req,res)=>{
    res.send("hello world")
})

app.get("/signup",(req,res)=>{
    res.send("you sign up successfuly")
})

app.post('/signup',(req,res)=>{
    const  {username,email,password}=req.body;

    if (!username || !email || !password){
        return res.send("all fields are requird")
    }

    if (password.length <8 && password.length > 16){
        return res.send("password lenth should be greater than 8 & less than 16")
    }

   
 
})



app.listen(port,()=>{
    console.log(`server is running on port http://localhost:${port}`)
})
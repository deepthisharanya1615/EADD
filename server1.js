const express=require('express')
const jwt=require('jsonwebtoken')
const dotenv=require('dotenv')
dotenv.config();

const app=express()
app.use(express.json())

const users=[{
    name:"cbit",
    msg:"welcome to cbit"
}];

app.post('/token',(req,res)=>{
    const user={name:req.body.username}
    const token=jwt.sign(user,process.env.ACCESS_KEY)
    return res.json({jwttoken:token})
})
app.get('/',(req,res)=>{
    const header =req.headers['authorization'];
    const token=header.split(' ')[1]
    jwt.verify(token,process.env.ACCESS_KEY,(err,user)=>{
        if (err){
            console.log("invalid token")
            res.sendStatus(403)
        }
        else{
            console.log(user)
            req.user=user
            res.json(users)
            res.sendStatus(200)
        }
    });
});
const port=3001
app.listen(port,()=>{
    console.log("running")
})
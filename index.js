const express = require('express')
const app = express()
//http://localhost:3000/

app.get('/:user/:password',(req, res)=>{
    const {user, password}= req.params
    if  (user ==='angel' && password=== '123'){
        res.json({msg: 'inicio de sesion exitoso'})
        return
    }



    res.status(404).json({msg:'error en el usuario o contraseña'})
})

//http://localhost:3000/login?user=angel&password=123
app.get('/login',(req,res)=>{ //endpoint
const queries=req.query
if(!user || !password){
    res.status(400).json({msg:'uou need to provide <user> and <password> parameters'})
    return
}
if  (user ==='angel' && password=== '123'){
    res.json({msg: 'inicio de sesion exitoso'})
    return
}
res.json(queries)
})


app.post('/',(req,res)=>{res.json({msg:'hello post'})})
app.put('/',(req,res)=>{res.json({msg:'hello put'})})
app.delete('/',(req,res)=>{res.json({msg:'hello delete'})})


app.listen(3000,()=>{
    console.log('listening on port 3000')
})
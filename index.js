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

app.post('/',(req,res)=>{res.json({msg:'hello post'})})
app.put('/',(req,res)=>{res.json({msg:'hello put'})})
app.delete('/',(req,res)=>{res.json({msg:'hello delete'})})


app.listen(3000,()=>{
    console.log('listening on port 3000')
})
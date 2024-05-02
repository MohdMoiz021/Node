const express=require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')

// Routing
const homeRouter=require('./Routing/homeRouter')
const bookRouter=require('./Routing/bookRouter')
const productRouter=require('./Routing/productRouter')

const app=express()
const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("Server is running");
})

// <!-- Http request format 
// content negotation 

// URL or URI : https://www.example.com/api/books

// Headers:client
// request:
// Content-type:appln/json,xml,appln/pdf
// accept:appln/json
// response: -->
// MEthods : get/POST/PUT/Delete/patch (edit) (verbs)
// Body is not sent in Get delete req but when it comes to post put patch body is required
// REST API : Reperesentational state transfer
mongoose.connect('mongodb://localhost:27017/nodejs')
app.use(bodyParser.json())
// Registring the routes
app.use('/', homeRouter)
app.use('/books',bookRouter)
app.use('/api/products',productRouter)

app.get('*',(req,res)=>{
    res.status(404)
    res.send("not found")
})
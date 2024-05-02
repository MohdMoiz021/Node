const express=require('express')

// express is a library

const app=express();
const PORT=3000;

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})


// Routing 
// Express is top on the node js it will call the internal method of node js
app.get('/',(req,res)=>{
    res.send("Hello Express ")
})



// serving the required query
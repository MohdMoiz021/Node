// Handler bcoz its giving request and response
const fs=require('fs')
const path=require('path')

// function home(req,res){
//     const filePath=path.resolve(__dirname,'../index.html')
//     res.status(200)
//     res.sendFile(filePath)
// }

function home(req,res){
    res.send('Home')
}

function health(req,res){
    res.status(200)
    const info={status:'up'}
    res.json(info)
}

module.exports={

    home:home,
    health:health
}
   

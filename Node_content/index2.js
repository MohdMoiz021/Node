const http=require('http') 
// module
function handler(req,res){

    const books=[
        {id:1,name:"Moiz",role:"software developer"},
        {id:2 ,name:"Moiz",role:"software developer"}
    ]
    switch(req.url){
        case '/':
        res.write('home')
        res.end()
        break;
        case '/books':
            //JSON.stringify() A common use of JSON is to exchange data to/from a web server. When sending data to a web server, the data has to be a string. Convert a JavaScript object into a string with JSON.stringify() .
            res.write(JSON.stringify(books))
            res.end();
            break;
            case'/moiz':
            default:
            res.write("Not found")
            res.end()
    }
   
}
const server=http.createServer(handler) 
const PORT=3000
server.listen(PORT,()=>{
    console.log(`Server is running ${PORT}`);
})



// console.log(req.url);
// res.write("hello");
// res.end()


// if(req.url==='/'){
//     res.write("home")
//     res.end();
//    }else if(req.url==='/books'){
//     res.write('books')
//     res.end() }else if(req.url==='/authors'){
//     res.write('authors')
// res.end();
//     }else{
//         res.write("found end")
//         res.end()
//     }
// }

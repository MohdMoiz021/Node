// http is a module
// Function handler can handle the req of the user and give the reponse to the user
// res is used to give the output of the user query
// routing is imp if the user req /books the number of books should be print rather than the same msg for all requests


const http=require('http');
// Handler function handles all the req and res b/w server and client using http server
function handler(req,res){
    
// The requests output giving we can give in two methods one is 
// 1 Switch case 
switch(req.url){
   case '/':
    res.write('Hello')
    break;
    case'/books':
    res.write('Books');
    break;
    default:
        res.write('Not found')
        res.end()
}
// 2. If else if ladder we can response to given req
    // if(req.url==='/'){
    //  res.write('Default');
    // }else if(req.url==='/books'){
    //    res.write('Books');
    // } else{
    //     res.write('not found')
    // }
    res.end();
}
const app=http.createServer(handler)
app.listen(3000)
// async
// callbacks 
console.log('Server is running....');
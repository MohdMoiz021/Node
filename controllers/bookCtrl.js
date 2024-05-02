// In memory database

const books=[
    {id:1,name:"Moiz",role:"software developer"},
    {id:2 ,name:"Moiz",role:"software developer"}
];

const getById=(req,res)=>{
    const id = req.params.id;
   const result=books.find(book=>book.id===+id)
//     for(let i=0;i<books.length;i++){
//         if(books[i].id===+id){
//             res.status(200)
//             res.json(books[i])
//             return;
//         }
// }
// if(result){
//     res.status(200);
//     res.json(result)
// }else{
//     res.status(404)
//     res.send("book Not found")
// }
// }

res.status(result ? 200 : 404)
res.send(result? result: 'Not found')
}

function get(req,res){
    res.status(200);  
    res.json(books)
}


// body 
const post=(req,res)=>{
    // Content-type
    const data=req.body;
   books.push(data);
    res.status(201)
    res.send('Created')
}

const remove=(req,res)=>{
    const id=+req.params.id;
    for(let i=0;i<books.length;i++){
        if(books[i].id===id){
            books.splice(i,1);
        }
    }
    res.status(204)
    res.send('Not found')
}
const put=(req,res)=>{
    const id=+req.params.id;
    const data=req.body;

    if(!data.name || !data.role){
        res.status(400)
        const msg=[]

        if(!data.name){
           const error = {msg:'Name is required'}
           msg.push(error)
        }
        if(!data.role){
            const error = {msg:'role is required'}
            msg.push(error)
         }
         res.status(400)
         res.json(msg)
    }

    for(let i=0;i<books.length;i++){
        if(books[i].id===id){
            books[i].name=data.name
            books[i].role=data.role
            res.status(204)
            res.send()
            return
        }
    }
    res.status(404)
    res.send('Not Found');
}

const patch=(req,res)=>{
    const id=+req.params.id;
    const data=req.body;

    for(let i=0;i<books.length;i++){
        if(books[i].id===id){
            for(let key in data){
                books[i][key]=data[key]
            }
        }
    }
    res.status(204)
    res.send()
}


module.exports={
    get,
    post,
    remove,
    getById,
    put,
    patch
}
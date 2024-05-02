const productModel=require('../models/productmodel')

class ProductCtrl{
    get(req,res){
        // db.products.find()
        productModel.find()
        .then(data=>{
            res.status(200);
            res.json(data)
        })
        .catch(()=>{
            res.status(500)
            res.send('Internal server error')
        })
    }
}

module.exports=new ProductCtrl()
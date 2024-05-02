const express=require('express')
const router=express.Router();
const homeCtrl=require('../controllers/defaultCtrl')


router.get('/',homeCtrl.home)
// Status codes should be send always it's a good practice
router.get('/health',homeCtrl.health)

module.exports=router;
var express = require('express');
var router = express.Router();
var user = require('../models/user')
var user1 = require('../models/product_schema')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/registor', async function(req, res, next) {

    try {
      const datausers = await user.create(req.body);
      res.status(201).json({
        "status" : "sucess",
        data:datausers
      })

    } catch (error) {
      res.json({
        err:error
      })
    }
});


router.post('/login', async function(req, res, next) {

    try {
      const password = req.body.password;
      const logindata = await user.findOne({email:req.body.email});

      if (password == logindata.password) {
        
        res.status(201).json({
          "status":"sucess",
          data:logindata
        })
        
      } else {
        console.log("Incorrect Password");
      }
    } catch (error) {
      res.json({
        err:error
      })
    }
});


router.post('/product', async function (req,res) {
  

  try {

    const productdata = await user1.create(req.body)

    res.status(201).json({
      "status":"success",
      data:productdata
    })
    
  } catch (error) {
    
    res.json({
      err:error
    })

  }

});

router.get('/getproductdata',async function (req,res) {
  

  try {

    const getproduct = await user1.find();

    res.status(200).json({
      status:"success",
      data:getproduct
    })
    
  } catch (error) {
    
      res.json({
        err:error
      })

  }

})
router.get('/getproductdata/:id',async function (req,res) {
  

  try {

    const getproduct = await user1.findById(req.params.id);

    res.status(200).json({
      status:"success",
      data:getproduct
    })
    
  } catch (error) {
    
      res.json({
        err:error
      })

  }

})

module.exports = router;

//create a special route to handle product reqs
const { workspaceSchemaPath } = require('@angular/cli/utilities/config');
const exp=require('express');
const productApp=exp.Router();

//to extract body of request object
productApp.use(exp.json());

//get all products
productApp.get('/getproducts',(request,response)=>{
  response.send({message:"all products"})
})

//get product by id
productApp.get("/getproduct/:id",(request,response)=>{

  response.send({message:`product with id ${request.params.id}`})
})


//to create product
// productApp.post('/create-product',(request,response)=>{
 
//   //get productCollectionObject
//   let productCollectionObject=request.app.get("productCollectionObject")
//   //get product obj from req
//   let productObj=request.body;
//   //insert productObj
//   productCollectionObject.insertOne(productObj,(err,result)=>{
//     if(err){
//       console.log("err in creating product ",err)
//     }
//     else{
//       response.send({message:'Product created successfylly'})
//     }
//   })

// })

//creating proudct using promise
// productApp.post('/create-product',(request,response)=>{
 
//   //get productCollectionObject
//   let productCollectionObject=request.app.get("productCollectionObject")
//   //get product obj from req
//   let productObj=request.body;
//   //insert productObj
//   productCollectionObject.insertOne(productObj)
//   .then((result)=>response.send({message:'Product created successfylly'}))
//   .catch(err=> console.log("err in creating product ",err))

// })

//create product with async n await
productApp.post('/create-product',async(request,response)=>{
 
  //get productCollectionObject
  let productCollectionObject=request.app.get("productCollectionObject")
  //get product obj from req
  let productObj=request.body;
  //insert productObj
  let result=await productCollectionObject.insertOne(productObj)
  //send response
  response.send({message:'Product created successfylly'})
})


//export productApp
module.exports=productApp;
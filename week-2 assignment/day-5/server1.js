import exp from'express'
let app=exp()
app.use(exp.json())
let port =4000 //set a port number
app.listen(port,()=> console.log("server is active")) //assign the port number to the HTTP request
let products=[]// test data

// api creation to handel the request from the client side
// to send the data to the HTTP response
app.get('/products',(req,res)=>{
    res.json({message:"products information",payload:products})//send the response

})
//to insert th data from the HTTP request
app.post('/products',(req,res)=>{
    let productsData=req.body // get the data from the request 
    products.push(productsData)// add the data to the array of obj
    res.json({message:'the product is added'})// send the response
})
//to update the data from the HTTP request
app.put('/products',(req,res)=>{
    let Productdata=req.body// get the data from the request
    let Index=products.findIndex(proobj=> proobj.productid===Productdata.productid)// find the index where the modified data is inserted
    if(Index===-1){
        res.json({message:"the product id is not found"})
    }
    else{
        products.splice(Index,1,Productdata)//update the data
        res.json({message:"The product  data has been updated"})// send the response
    }
})
// to delete the data based on the id
app.delete('/products/:id',(req,res)=>{
    let Productid=Number(req.params.id)// the id from the url
    let Index=products.findIndex(proobj=> proobj.productid===Productid)// find the index to delete the data
    if(Index===-1){
        res.json({message:"The product is not found"})
    }
    else{
        products.splice(Index,1)//delete the data
        res.json({message:"The product is deleted "})//send the response
    }
})
// to send the product details based on the brand
app.get('/products/:brand',(req,res)=>{
    let Productbrand=req.params.brand// get the product brand from url
    let Data=products.filter(proobj=>proobj.brand===Productbrand)// filter the producst based on the brand
    if(Data===undefined){
        res.json({message:"The product is not found"})
    }
    else{
        res.json({message:"The product information according to the data",payload:Data})//send the response
    }
})



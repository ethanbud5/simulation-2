
function getHouses(req,res){
    req.app.get("db")
        .get_houses().then(response=>{
            res.status(200).json(response);
            
        }).catch(err=>console.log(err))
        
}

module.exports={
    getHouses
}
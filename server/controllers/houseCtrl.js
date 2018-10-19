
function getHouses(req,res){
    req.app.get("db")
        .get_houses().then(response=>{
            res.status(200).json(response);
            
        }).catch(err=>console.log(err))
        
}
function addHouse(req,res){
        //console.log(req.app.get("db"))
    req.
    app.get("db").houses.insert({
        name:req.body.title,
        address:req.body.address,
        city:req.body.city,
        state:req.body.state,
        zip:req.body.zip,
        img:req.body.image,
        mortgage:req.body.mortgage,
        rent:req.body.rent
        }, function(err, res) {
            console.log(err)
        });
        res.sendStatus(200);
}
function removeHouse(req,res){
    //console.log("deleting...")
    req.app
        .get("db")
        .delete_house(req.params.id)
        .then(response=>{
            res.sendStatus(200)
        })
        .catch(err=>res.status(500).json(err));
}

module.exports={
    getHouses,
    addHouse,
    removeHouse
}
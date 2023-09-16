exports.create=function(req,res){
    nano.db.create(req.body.dbname,function(){
        if(err){
            res.send("Error Creating Database"+req.body.dbname);
            return;
        }
        res.send("Database"+req.body.dbname+"Created Successfully");
    });
};
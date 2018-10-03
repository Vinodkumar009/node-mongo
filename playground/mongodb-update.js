const {MongoClient,ObjectID} = require("mongodb");
MongoClient.connect('mongodb://localhost:27017/TodoAppApi',(err,client)=>{
    if(err){
        return("Unable to connect to MongoDB Server")
    }
    console.log("Connected to MongoDB Server");
	
	const db = client.db("TodoAppApi")
    db.collection("Todos").findOneAndUpdate(
	{_id:1},
	{
		$inc:{quantity:-3,"metrics.orders":3}
	},
	{
	returnOriginal:false	
	}).then((result)=>{
		console.log(result);
	},(err)=>{
		console.log("deleting failed",err);
	});

    //client.close();
})
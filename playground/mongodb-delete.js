const {MongoClient,ObjectID} = require("mongodb");
MongoClient.connect('mongodb://localhost:27017/TodoAppApi',(err,client)=>{
    if(err){
        return("Unable to connect to MongoDB Server")
    }
    console.log("Connected to MongoDB Server");
	
	const db = client.db("TodoAppApi")
    db.collection("Todos").deleteMany({name:"chandu"}).then((result)=>{
		console.log(result);
	},(err)=>{
		console.log("deleting failed",err);
	});

    client.close();
})
//deleteMany,deleteOne,findOneAndDelete(this is returns deleted one)
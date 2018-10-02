const {MongoClient,ObjectID} = require("mongodb");
MongoClient.connect('mongodb://localhost:27017/TodoAppApi',(err,client)=>{
    if(err){
        return("Unable to connect to MongoDB Server")
    }
    console.log("Connected to MongoDB Server");
	
	const db = client.db("TodoAppApi")
	db.collection("Todos").find().count().then((count)=>{
		console.log(count);
	},(err)=>{
	});

    client.close();
})
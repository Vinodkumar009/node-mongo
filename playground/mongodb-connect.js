
const {MongoClient,ObjectID} = require("mongodb");
MongoClient.connect('mongodb://localhost:27017/TodoAppApi',(err,client)=>{
    if(err){
        return("Unable to connect to MongoDB Server")
    }
    console.log("Connected to MongoDB Server");
	
	const db = client.db("TodoAppApi")
	db.collection("Todos").insertOne({
		_id: new ObjectID(1),
	  sku: "abc123",
	  quantity: 10,
	  metrics: {
		orders: 2,
		ratings: 3.5
	  }
	},(err,result) =>{
		if(err){
			return console.log("Unable to insert into todo by vinod",err);
		}
		//console.log(JSON.stringify(result.ops[0]._id.getTimestamp()),undefined,2);
	});

    client.close();
})

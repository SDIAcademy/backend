const MongoCLient = require('mongodb').MongoClient;
const url = "mongodb://mongo:27017";
const dbName = "test";

(async function(){
    try{
        const client = await MongoCLient.connect(url,{ useNewUrlParser: true });
        console.log("connected");
        const db = client.db(dbName);
        // const colls = await db.collections();
        // console.log(colls);
        const col = db.collection('users');
        // await col.deleteMany({})
        let result = await col.find({}).toArray();
        console.log(result);
        client.close();
    } catch(e){
        console.log(e);
    } finally{
        console.log('end');
    }
})();

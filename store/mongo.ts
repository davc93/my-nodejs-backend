import { config } from "../config";
import { MongoClient,ObjectId } from "mongodb";

let uri;
let atlas;
if(!atlas){
    uri = `mongodb://${config.MONGO.DB_USERNAME}:${config.MONGO.DB_PASSWORD}@localhost:27017/`
}


const client = new MongoClient(uri as string);
const database = client.db(config.MONGO.DB_NAME);
async function insert(data: any, collection: string) {

        
    const getCollection = database.collection(collection);
    const result =  await getCollection.insertOne(data)
    console.log(result.insertedId);
    return result
        
    
}

async function upsert(data: any, collection: string) {
    return insert(data, collection);
}
async function list(collection:string) {
    const getCollection = database.collection(collection);
    const result = await getCollection.find({}).toArray()
    console.log(result);
    return result


}
async function get(id:string,collection:string) {
    const getCollection = database.collection(collection);
    const mongoId = new ObjectId(id)
    const result = await getCollection.findOne({"_id":mongoId})
    console.log(result);
    return result
}

export default {
    upsert,
    list,
    get,

};

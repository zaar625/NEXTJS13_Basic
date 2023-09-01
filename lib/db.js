import {MongoClient} from 'mongodb';

export async function connectToDatabase(){
    const client = await MongoClient.connect('mongodb+srv://zaar625:tkddbs2360^^@cluster0.qxdkw11.mongodb.net/?retryWrites=true&w=majority');

    return client
}
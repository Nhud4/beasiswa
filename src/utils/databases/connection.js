import clientPromise from './mongoDB';

async function post(data, collection){
  const client = await clientPromise;
  const db = await client.db('beasiswa');

  const post = await db.collection(collection).insertOne(data);

  return post;
};

async function getAll(collection){
  const client = await clientPromise;
  const db = await client.db('beasiswa');
  const getData = await db.collection(collection).find({}).toArray();

  return getData;
}

export {
  post,
  getAll
};

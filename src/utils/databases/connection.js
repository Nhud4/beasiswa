import clientPromise from './mongoDB';

async function insertOne(data, collection){
  const client = await clientPromise;
  const db = await client.db('beasiswa');

  const post = await db.collection(collection).insertOne(data);

  return post;
};

async function findAll(collection){
  const client = await clientPromise;
  const db = await client.db('beasiswa');
  const data = await db.collection(collection).find({}).toArray();

  return data;
}

async function findOne(params, collection){
  const client = await clientPromise;
  const db = await client.db('beasiswa');
  const data = await db.collection(collection).findOne(params);

  return data;
}

export {
  insertOne,
  findAll,
  findOne
};

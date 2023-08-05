import _ from 'lodash';
import Wrapper from '../helper/wrapper';
import clientPromise from './mongoDB';

const wrapper = new Wrapper();

async function insertOne(data, collection){
  try{
    const client = await clientPromise;
    const db = await client.db('beasiswa');
    const recordset = await db.collection(collection).insertOne(data);
    if (recordset.acknowledged === false) {
      return wrapper.error('Failed Inserting Data to Database');
    }

    return wrapper.data(recordset);
  }catch(err){
    return wrapper.error(`Error Insert One Mongo ${err.message}`);
  }
};

async function findAll(collection){
  try{
    const client = await clientPromise;
    const connection = await client.db('beasiswa');
    const recordset = await connection.collection(collection).find({}).toArray();
    if (_.isEmpty(recordset)) {
      return wrapper.data([]);
    }

    return wrapper.data(recordset);
  }catch(err){
    return wrapper.error(`Error Find All Mongo ${err.message}`);
  }
}

async function findOne(params, collection){
  try{
    const client = await clientPromise;
    const connection = await client.db('beasiswa');
    const recordset = await connection.collection(collection).findOne(params);
    if (_.isEmpty(recordset)) {
      return wrapper.data(null);
    }

    return wrapper.data(recordset);
  }catch(err){
    return wrapper.error(`Error Find One Mongo ${err.message}`);
  }
}

async function findPaginated(sortByfield, size, page, params, sortBy = null){
  try{
    const client = await clientPromise;
    const connection = await client.db('beasiswa');
    const db = await connection.collection('mahasiswa');
    const sortParam = { [sortByfield]: sortBy ? sortBy : 1 };
    const pageParam = size * (page - 1);
    const recordset = await db.find(params).sort(sortParam).limit(size).skip(pageParam).toArray();
    const totalData = await db.countDocuments(params);
    if(_.isEmpty(recordset)){
      return wrapper.dataPage([], {
        totalData,
        totalPage: 1
      });
    }

    return wrapper.dataPage(recordset, {
      totalData,
      totalPage: Math.ceil(totalData / size)
    });
  }catch(err){
    return wrapper.error(`Error Find Pagination Mongo ${err.message}`);
  }
}

async function countData(){
  try{
    const client = await clientPromise;
    const connection = await client.db('beasiswa');
    const db = await connection.collection('mahasiswa');
    const totalData = await db.countDocuments();

    return wrapper.dataPage({
      totalData,
    });
  }catch(err){
    return wrapper.error(`Error Count Data Mongo ${err.message}`);
  }
}

async function updateOne(params, updateDocument, increment){
  const query =  {};
  if (increment){
    query.$inc = increment;
  }
  if (updateDocument){
    query.$set = updateDocument;
  }
  try{
    const client = await clientPromise;
    const connection = await client.db('beasiswa');
    const db = await connection.collection('mahasiswa');
    const data = await db.updateOne(params, query);
    if (data.modifiedCount >= 0) {
      const recordset = await this.findOne(params);
      return wrapper.data(recordset.data);
    }

    return wrapper.error('Failed updating data');
  }catch(err){
    return wrapper.error(`Error Update One Mongo ${err.message}`);
  }
}

async function deleteData(params, collection){
  try{
    const client = await clientPromise;
    const connection = await client.db('beasiswa');
    const recordset = await connection.collection(collection).deleteOne(params);
    if (recordset.deletedCount > 0) {
      return wrapper.data(true);
    }

    return wrapper.error('Failed deleting data');
  }catch(err){
    return wrapper.error(`Error delete data Mongo ${err.message}`);
  }
}

export {
  insertOne,
  findAll,
  findOne,
  findPaginated,
  updateOne,
  deleteData,
  countData
};

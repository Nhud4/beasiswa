import _ from 'lodash';
import Wrapper from '../helper/wrapper';
import clientPromise from './mongoDB';

const wrapper = new Wrapper();

async function insertOne(data, collection){
  try{
    const client = await clientPromise;
    const db = await client.db('beasiswa');
    const recordset = await db.collection(collection).insertOne(data);
    if (recordset.insertedCount !== 1) {
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
    const { data: totalData } = await this.countAll(params);
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

export {
  insertOne,
  findAll,
  findOne,
  findPaginated
};

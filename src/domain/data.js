import _ from 'lodash';
import { ObjectId } from 'mongodb';
import { findOne, findAll, insertOne, updateOne } from '@/utils/databases/connection';
import { NotFoundError, InternalServerError, UnprocessableEntityError } from '@/utils/helper/error';

const collection = 'mahasiswa';

export default class AplicationData{
  async insert(payload){
    try{
      const { nama, umur, nik, gender, desa, kecamatan, kabupaten, universitas, jenis, akreditasi, semester, ips } = payload;

      const checkName = await findOne({ nama: nama }, collection);
      if(!_.isEmpty(checkName.data)){
        return { err: new UnprocessableEntityError('name already exists', [{
          field: 'name',
          message: 'name already exists'
        }]) };
      }

      const checkNik = await findOne({ nik: nik }, collection);
      if(!_.isEmpty(checkNik.data)){
        return { err: new UnprocessableEntityError('nik already exists', [{
          field: 'nik',
          message: 'nik already exists'
        }]) };
      }

      const data ={
        nama: nama,
        umur: umur,
        nik: nik,
        gender: gender,
        desa: desa,
        kecamatan: kecamatan,
        kabupaten: kabupaten,
        universitas: universitas,
        jenis: jenis,
        akreditasi: akreditasi,
        semester: semester,
        ips: ips,
      };

      const insertData = await insertOne(data, collection);
      if(insertData.err)throw { message: 'fail to insert data mahasiswa' };

      return insertData;
    }catch(err){
      return { err: new InternalServerError(err.message) };
    }
  }

  async list(){
    try{
      const listData = await findAll(collection);
      if(listData.err)throw { message: 'fial to list data mahasiswa' };

      return listData;
    }catch(err){
      return { err: new InternalServerError(err.message) };
    }
  }

  async detail(payload){
    try{
      const { userId } = payload;
      const getUser = await findOne({ _id: new ObjectId(userId) }, collection);
      if(getUser.err)throw { message: 'fial to get detail' };
      if(_.isEmpty(getUser.data)){
        return { err: new NotFoundError('data not found') };
      }

      return getUser;
    }catch(err){
      return { err: new InternalServerError(err.message) };
    }
  }

  async updateData(payload){
    try{
      const { userId, name, age, nik, gender, desa, kecamatan, kabupaten, universitas, jenis, akreditasi, semester, ips } = payload;

      const getUser = await findOne({ _id: new ObjectId(userId) }, collection);
      if(getUser.err)throw { message: 'fail to get id user' };
      if(_.isEmpty(getUser.data)){
        return { err: new NotFoundError('data not found') };
      }

      const data ={
        name: name,
        age: age,
        nik: nik,
        gender: gender,
        desa: desa,
        kecamatan: kecamatan,
        kabupaten: kabupaten,
        universitas: universitas,
        jenis: jenis,
        akreditasi: akreditasi,
        semester: semester,
        ips: ips,
      };

      const updateData = await updateOne({ _id: new ObjectId(userId) }, data);
      if(updateData.err)throw { message: 'fail to update data' };

      return updateData;
    }catch(err){
      return { err: new InternalServerError(err.message) };
    }
  }
}

import _ from 'lodash';
import { ObjectId } from 'mongodb';
import { findOne, findAll, insertOne, updateOne, findPaginated, countData } from '@/utils/databases/connection';
import { NotFoundError, InternalServerError, UnprocessableEntityError } from '@/utils/helper/error';
import dataTesting from './algoritma/dataTesting';
import Probability from './algoritma/probabilitas';

const collection = 'mahasiswa';

export default class AplicationData{
  async insert(payload){
    try{
      const {
        nama_mahasiswa,
        nik,
        no_kk,
        kepala_keluarga,
        nim,
        tempat_lahir,
        tanggal_lahir,
        umur,
        nama_ibu,
        alamat,
        desa,
        kecamatan,
        kabupaten,
        no_hp,
        universitas,
        fakultas,
        prodi,
        semester,
        nilai_khs,
        bank,
        no_rekening,
        jenis_kartu,
        ukt,
        jenis_univ,
        akreditasi
      } = payload;

      // const checkName = await findOne({ nama_mahasiswa: nama_mahasiswa }, collection);
      // if(checkName.err)throw { message: 'fail to get data by name' };
      // if(!_.isEmpty(checkName.data)){
      //   return { err: new UnprocessableEntityError('name already exists', [{
      //     field: 'name',
      //     message: 'name already exists'
      //   }]) };
      // }

      // const checkNik = await findOne({ nik: nik }, collection);
      // if(checkNik.err)throw { message: 'fail to get data by nik' };
      // if(!_.isEmpty(checkNik.data)){
      //   return { err: new UnprocessableEntityError('nik already exists', [{
      //     field: 'nik',
      //     message: 'nik already exists'
      //   }]) };
      // }

      // const count = await countData();
      // if(count.err)throw { message: 'fail to count data' };
      const totalData = 0;
      const dataProbabilitas = await Probability(dataTesting);
      const nilaiIps = nilai_khs?.slice(-1);
      const dataKasus = {
        nama_mahasiswa,
        umur: umur <= 25 ? 'MEMENUHI' : 'TIDAK',
        ips: nilaiIps[0] >= 3 ? 'CUKUP': 'TIDAK CUKUP',
        jenis_kartu: 'KPM',
        univ: jenis_univ,
        akreditasi,
      };

      const probUmur = dataProbabilitas.umur.filter((item) => item.attribute === dataKasus.umur);
      const probIps = dataProbabilitas.ips.filter((item) => item.attribute === dataKasus.ips);
      const probKartu = dataProbabilitas.katru.filter((item) => item.attribute === dataKasus.jenis_kartu);
      const probUniv = dataProbabilitas.univ.filter((item) => item.attribute === dataKasus.univ);
      const probAkreditasi = dataProbabilitas.akreditasi.filter((item) => item.attribute === dataKasus.akreditasi);

      const probLulus = {
        umur: probUmur[0].probability1.probability,
        ips: probIps[0].probability1.probability,
        katru: probKartu[0].probability1.probability,
        univ: probUniv[0].probability1.probability,
        akreditasi: probAkreditasi[0].probability1.probability
      };

      const probTidakLulus = {
        umur: probUmur[0].probability2.probability,
        ips: probIps[0].probability2.probability,
        katru: probKartu[0].probability2.probability,
        univ: probUniv[0].probability2.probability,
        akreditasi: probAkreditasi[0].probability2.probability
      };

      const lulus = probLulus.umur * probLulus.ips * probLulus.katru * probLulus.univ * probLulus.akreditasi;
      const tidakLulus = probTidakLulus.umur * probTidakLulus.ips * probTidakLulus.katru * probTidakLulus.univ * probTidakLulus.akreditasi;

      const totalProbabilitas = {
        lulus: lulus,
        tidakLulus: tidakLulus,
        kesimpulan: lulus > tidakLulus ? 'lulus':'tidak lulus'
      };

      const data = {
        no: totalData + 1,
        nama_mahasiswa,
        nik,
        no_kk,
        kepala_keluarga,
        nim,
        tempat_lahir,
        tanggal_lahir,
        nama_ibu,
        alamat,
        desa,
        kecamatan,
        kabupaten,
        no_hp,
        universitas,
        fakultas,
        prodi,
        semester,
        nilai_khs,
        jenis_univ,
        akreditasi,
        bank,
        no_rekening,
        jenis_kartu,
        ukt,
        beasiswa: {
          niliaiLulus: probLulus,
          nilaiTidalLulus: probTidakLulus,
          totalProbabilitas,
        }
      };

      // const insertData = await insertOne(data, collection);
      // if(insertData.err)throw { message: 'fail to insert data mahasiswa' };

      // return insertData;
      return data;
    }catch(err){
      return { err: new InternalServerError(err.message) };
    }
  }

  async list(payload){
    try{
      const { page, size, sort, search } = payload;
      const listData = await findPaginated(sort, parseInt(size), parseInt(page));
      if(listData.err)throw { message: 'fial to list data mahasiswa' };

      if(search){
        const newSearch = { nama_mahasiswa: search };
        const listDataSearch = await findPaginated(sort, parseInt(size), parseInt(page), newSearch);
        if(listDataSearch.err)throw { message: 'fial to list data mahasiswa' };

        return listDataSearch;
      }

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

  async naiveBayes(){
    try{
      const data = await Probability(dataTesting);

      return data;
    }catch {
      return { err: new InternalServerError('fail algoritma') };
    }
  }
}

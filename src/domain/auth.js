import _ from 'lodash';
import Password from '@/utils/helper/password';
import { NotFoundError, InternalServerError, UnprocessableEntityError } from '@/utils/helper/error';
import { findOne, insertOne } from '@/utils/databases/connection';

const passwordUtils = new Password();

export default class Auth{
  async login(payload){
    try{
      const { username, password } = payload;

      const user = await findOne({ username: username }, 'users');
      if(user.err) throw { message: 'fail to get data user' };

      if(_.isEmpty(user.data)){
        return { err: new NotFoundError('data not found') };
      }
      const isPasswordValid = await passwordUtils.compare(password, user.data.password);
      if(!isPasswordValid) throw { message: 'username or password is incorrect' };

      return user;
    }catch(err){
      return { err: new InternalServerError(err.message) };
    }
  }

  async register(payload){
    try{
      const { name, username, password, userType } = payload;

      const hashPassword = await passwordUtils.hash(password);
      const data = {
        name: name,
        username: username,
        password: hashPassword,
        userType: userType
      };

      const getUser = await findOne({ username: username }, 'users');

      if(getUser.err)throw { message: 'fail to get user' };
      if(!_.isEmpty(getUser.data)){
        return { err: new UnprocessableEntityError('username already exists', [{
          field: 'username',
          message: 'username already exists'
        }]) };
      }

      const insert = await insertOne(data, 'users');
      if(insert.err)throw{ message: 'fail to insert data' };

      return data;
    }catch(err){
      return { err: new InternalServerError(err.message) };
    }
  }
}

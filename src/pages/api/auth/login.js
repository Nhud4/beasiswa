import { findOne } from '@/utils/databases/connection';

export default async function login(req, res){
  const payload = { ...req.body };

  const user = await findOne({ username: payload.username }, 'users');
  if(user.password !== payload.password){
    return res.status(422).json({
      message: 'username atau password salah'
    });
  }
}

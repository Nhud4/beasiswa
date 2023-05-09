// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ObjectId } from 'mongodb';
import { findOne } from '@/utils/databases/connection';

export default async function handler(req, res) {
  const payload = { ...req.query, ...req.body };
  payload.methode = req.method;

  const etst = await findOne({ _id: new ObjectId(payload.userID) }, 'mahasiswa');
  res.status(200).json(etst);
}

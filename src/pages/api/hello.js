// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getAll } from '@/utils/databases/connection';

export default async function handler(req, res) {
  const data = await getAll('mahasiswa');
  res.status(200).json(data);
}

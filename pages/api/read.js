/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

import RetroModel from "../../models/retroModels";
import connectDB from "../../utils/connectdb";

export default async function read(req, res) {
  try {
    await connectDB();
    const stuff = await RetroModel.find();
    res.status("200").json(stuff);
  } catch (error) {
    res.astatus("500").json({ error });
  }
}

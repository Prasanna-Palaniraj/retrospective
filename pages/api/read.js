/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

import RetroModel from "../../models/retroModels";
import SessionModel from "../../models/sessionModel";
import connectDB from "../../utils/connectdb";

export default async function read(req, res) {
  const type = req.body.type;
  try {
    await connectDB();
    const stuff = await RetroModel.find();
    res.status("200").json(stuff);
  } catch (error) {
    res.astatus("500").json({ error });
  }
}

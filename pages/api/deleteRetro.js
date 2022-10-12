/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

import RetroModel from "../../models/retroModels";
import connectDB from "../../utils/connectdb";

export default async function deleteRetro(req, res) {
  const { itemID } = req.body;

  await connectDB;

  try {
    await RetroModel.deleteOne({ _id: itemID });
    res.status("200").send("Success");
  } catch (error) {
    console.log(error);
    res.status("500").send("Failure");
  }
}

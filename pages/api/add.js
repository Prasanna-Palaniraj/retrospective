/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

import RetroModel from '../../models/retroModels';
import connectDB from '../../utils/connectdb';

export default async function add(req,res){
    const {description, postedBy, type, session} = req.body;
    
    await connectDB();

    const newRetro = new RetroModel({
        description, postedBy, type, session
    });
    
    try{
        const retro = await RetroModel.create(newRetro);
        res.status('200').json({retro});
    }
    catch(error){
        console.log(error);
        res.status('500').json({error});
    }
}
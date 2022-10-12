import SessionModel from '../../models/sessionModel';
import connectDB from '../../utils/connectdb';

/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

export default async function addSession(req,res){
    const {sessionID} = req.body;

    await connectDB();

    const newSession = new SessionModel({
        sessionID: sessionID,
        NumTaskMaster: 1,
        NumCreator: 0,
        NumDemolisher: 0,
        NumOptimist: 0,
    });

    try {
        const session = await SessionModel.create(newSession);
        res.status('200').json({session});
    } catch (error) {
        console.log(error);
        res.status('500').json({error});
    }
}
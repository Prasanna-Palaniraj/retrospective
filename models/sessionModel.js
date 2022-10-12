import {model, models, Schema} from "mongoose";

const sessionSchema = new Schema({
    sessionID: String,
    NumTaskMaster: Number,
    NumCreator: Number,
    NumDemolisher: Number,
    NumOptimist: Number,
});

const SessionModel = models.Session || model("Session", sessionSchema);

export default SessionModel;

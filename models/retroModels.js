import { Schema, model, models } from "mongoose";

const retroSchema = new Schema({
    description: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    postedBy: {
        type: String,
        required: true,
    }
});

const RetroModel = models.Retro || model('Retro', retroSchema);

export default RetroModel;
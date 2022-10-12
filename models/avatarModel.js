import { model, models, Schema } from "mongoose";

const avatarSchema = new Schema({
    name: String,
    image: String,
});

const avatarModel = models.Avatar || model("Avatar", avatarSchema);

export default avatarModel;
import { Document, model, Schema } from "mongoose";


interface IGenre extends Document{
    name: string;
    movies?: Schema.Types.ObjectId;
    createAt: Date;
    updateAt: Date;

}

const GenreSchema = new Schema<IGenre>(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            unique: true,
        },
        movies: {
            type: [{type: Schema.Types.ObjectId, ref: "Movies"}],
        }
    },
    {timestamps: true, versionKey: false}
);

const GenreModel = model<IGenre>("Genre", GenreSchema)

export default GenreModel;
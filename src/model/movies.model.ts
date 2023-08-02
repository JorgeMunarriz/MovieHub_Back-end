import { Document, Schema, model } from "mongoose";

interface IMoviesDocument extends Document {
  name: string;
  year: number;
  movies?: string[];
  createdAt: Date;
  undatedAt: Date;
}

const MoviesSchema = new Schema<IMoviesDocument>({
 name: {
    type: String,
    required: [true, "Name is required"],
 },
 year:{
    type: Number,
    required: [true, "year is required"],
 }
}, {timestamps: true, versionKey: false});


const MoviesModel = model<IMoviesDocument>("Movies", MoviesSchema);

export default MoviesModel;
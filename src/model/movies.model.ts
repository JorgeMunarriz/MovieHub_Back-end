import { Document, Schema, model } from "mongoose";

interface IMoviesDocument extends Document {
  name: string;
  score: number;
  year: number;
  createdAt: Date;
  updatedAt: Date;
}

const MoviesSchema = new Schema<IMoviesDocument>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    score:{ 
      type: Number, 
      required: [true, "Score is required"], 
   },
   year: {
      type: Number,
   }
  },
  { timestamps: true, versionKey: false }
);

const MoviesModel = model<IMoviesDocument>("Movies", MoviesSchema);

export default MoviesModel;

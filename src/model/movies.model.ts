import { Document,Types, Schema, model } from "mongoose";

interface IMoviesDocument extends Document {
  name: string;
  score: number;
  year: number;
  genre: Types.ObjectId[];
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
   },
   genre: {
    type: [{ type: Schema.Types.ObjectId, ref: "Genre"}]
   }
  },
  { timestamps: true, versionKey: false }
);

const MoviesModel = model<IMoviesDocument>("Movies", MoviesSchema);

export default MoviesModel;

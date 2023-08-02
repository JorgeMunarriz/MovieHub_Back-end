import mongoose from "mongoose";
import config from "../config/config";

const connection = async () => {
  try {
    const connectionDB = await mongoose.connect(config.db.URI);
    console.log(connectionDB.connection.db);
    const connectionDatabase = mongoose.connection;
    connectionDatabase.once("open", () => {
      console.log("Mongo connected");
    });
  } catch (error) {}
};

export default connection;

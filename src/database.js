import config from "./config";
import mongoose from "mongoose";

(async () => {
  try {
    const db = await mongoose.connect(config.mongodbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("database is connected :", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();

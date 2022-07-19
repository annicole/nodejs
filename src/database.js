import config from "./config";
import mongoose from 'mongoose'

(async () => {
  const db= await mongoose.connect(config.mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("database is connected :", db.connection.name);
})();


import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


const MON_URL = process.env.MONGODB_URL;
const port = process.env.PORT || 3000;
app.listen(port, async () => {
  try {
    await mongoose.connect(MON_URL);
    console.log("connected to MongoDB ");
  } catch (err) {
    console.log(err);
  }
  console.log(`server running on port ${port}`);
});

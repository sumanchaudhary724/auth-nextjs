import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;
    connection.on("Connected", () => {
      console.log("MongoDB connected successfully");
    });
  } catch (error) {
    console.log("Something goes wrong!");
    console.log(error);
  }
}

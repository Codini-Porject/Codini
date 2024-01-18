import mongoose from "mongoose";

const connection = {};

export const connectToDB = async () => {
  try {
    if (connection.isConnected) {
      console.log("Database is already connected");
      return;
    }

    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;

    console.log("Database connected successfully!");
  } catch (error) {
    console.log("Failed to connect to the database:", error);
    throw new Error("Failed to connect to the database");
  }
};

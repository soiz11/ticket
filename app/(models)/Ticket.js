import mongoose, { Schema } from "mongoose";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {});
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

connectToDatabase();

mongoose.Promise = global.Promise;

const ticketSchema = new mongoose.Schema(
  {
    title: String,
    category: String,
    description: String,
    priority: Number,
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.model("Ticket", ticketSchema);
export default Ticket;

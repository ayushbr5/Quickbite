import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://ayushbr1765:Ehj9zQIjAIXQAKMx@cluster0.uyq3pt5.mongodb.net/quickbite?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => console.log("✅ MongoDB Connected Successfully"))
    .catch((err) => console.error("❌ MongoDB Connection Error:", err));
};


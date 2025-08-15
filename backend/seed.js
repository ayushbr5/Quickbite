import mongoose from "mongoose";
import foodModel from "./models/foodModel.js";

// ✅ Connect to MongoDB
mongoose.connect(
  "mongodb+srv://ayushbr1765:Ehj9zQIjAIXQAKMx@cluster0.uyq3pt5.mongodb.net/quickbite"
)
.then(() => {
  console.log("✅ MongoDB Connected for Seeding");
  seedData();
})
.catch(err => {
  console.error("❌ MongoDB Connection Error:", err);
});

// ✅ Sample menu data
const foods = [
  {
    name: "Margherita Pizza",
    description: "Classic cheese and tomato pizza",
    price: 299,
    category: "Italian",
    image: "pizza.jpg"
  },
  {
    name: "Cheese Burger",
    description: "Juicy burger with melted cheese",
    price: 199,
    category: "Fast Food",
    image: "burger.jpg"
  },
  {
    name: "White Sauce Pasta",
    description: "Creamy Alfredo pasta with mushrooms",
    price: 249,
    category: "Italian",
    image: "pasta.jpg"
  }
];

// ✅ Insert sample data
async function seedData() {
  try {
    await foodModel.deleteMany(); // Clear old data
    await foodModel.insertMany(foods);
    console.log("🌟 Sample foods added successfully!");
    mongoose.connection.close();
  } catch (error) {
    console.error("❌ Error while seeding:", error);
    mongoose.connection.close();
  }
}

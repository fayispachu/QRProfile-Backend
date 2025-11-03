import mongoose from "mongoose";
import dotenv from "dotenv";
import Profile from "./models/Profile.model.js";

dotenv.config();

// Connect DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ DB Connection Error:", err));

// Inject Data Function
const injectProfile = async () => {
  try {
    // Remove old data
    await Profile.deleteMany({});
    console.log("🗑️ Old profiles removed.");

    // Insert your personal details
    const myProfile = {
      name: "Fayiz Ismail",
      bio: "Full Stack Developer passionate about building modern web apps using MERN stack.",
      email: "fayizpachu217@gmail.com",
      phone: "+91 9744850680",
      location: "Kerala, India",
      github: "https://github.com/fayispachu",
      portfolio: "https://fayis-portfolio-1.onrender.com/",
      image: "https://your-cloudinary-image-url.jpg",
    };

    await Profile.create(myProfile);
    console.log("✅ New profile injected successfully!");
  } catch (error) {
    console.error("❌ Error injecting profile:", error);
  } finally {
    mongoose.connection.close();
  }
};

// Run the function
injectProfile();

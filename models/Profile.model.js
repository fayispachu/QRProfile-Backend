import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  name: String,
  bio: String,
  email: String,
  phone: String,
  location: String,
  github: String,
  linkedin: String,
  portfolio: String,
  image: String,
});

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;

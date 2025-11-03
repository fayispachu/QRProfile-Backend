import Profile from "../models/Profile.model.js";

export const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne(); // fetch first profile
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    res.json(profile);
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// // Create or Update Profile
// export const upsertProfile = async (req, res) => {
//   try {
//     const { name, email, phone, bio, image, linkedin, github, instagram } = req.body;

//     let profile = await Profile.findOne();

//     if (profile) {
//       profile.name = name;
//       profile.email = email;
//       profile.phone = phone;
//       profile.bio = bio;
//       profile.image = image;
//       profile.linkedin = linkedin;
//       profile.github = github;
//       profile.instagram = instagram;
//     } else {
//       profile = new Profile({ name, email, phone, bio, image, linkedin, github, instagram });
//     }

//     await profile.save();
//     res.json({ message: "Profile saved successfully", profile });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

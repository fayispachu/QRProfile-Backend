import express from "express";
import { getProfile } from "../controllers/profileController.js";

const ProfileRouter = express.Router();

ProfileRouter.get("/", getProfile);

export default ProfileRouter;

import express from "express";
import { createSurvey, getSurvey } from "../controllers/surveryController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/survey", auth, createSurvey);
router.get("/survey", getSurvey);

export default router;

import { createSurvey, getSurvey } from "../controllers/surveryController.js";
import express from "express";

const surveyRoutes = express.Router();

surveyRoutes.post("/api/survey", createSurvey);
surveyRoutes.get("/api/survey", getSurvey);

export default surveyRoutes;

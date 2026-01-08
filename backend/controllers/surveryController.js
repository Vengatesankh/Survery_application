import Survey from "../models/Survey.js";

export const createSurvey = async (req, res) => {
  try {
    const survey = await Survey.create({ ...req.body });
    res.json({ message: "Survey submitted successfully", survey });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getSurvey = async (req, res) => {
  try {
    const surveys = await Survey.find().sort({ createdAt: -1 });
    res.json(surveys);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

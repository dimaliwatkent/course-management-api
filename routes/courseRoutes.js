import express from "express";
import getPipeline from "../utilites/pipeline.js";
import Course from "../models/courseSchema.js";

const router = express.Router();

router.get("/allcourses", async (req, res) => {
  try {
    const courses = await Course.aggregate(getPipeline({}, "all"));
    res.send(courses);
  } catch (err) {
    console.error("Error fetching all courses", err);
    res.status(500).send("Something went wrong, try again after some time.");
  }
});

router.get("/courses", async (req, res) => {
  try {
    const courses = await Course.aggregate(getPipeline());
    res.send(courses);
  } catch (err) {
    console.error("Error fetching courses", err);
    res.status(500).send("Something went wrong, try again after some time.");
  }
});

router.get("/bsis", async (req, res) => {
  try {
    const bsisCourses = await Course.aggregate(
      getPipeline({ "courses.tags": "BSIS" }),
    );
    res.send(bsisCourses);
  } catch (err) {
    console.error("Error fetching BSIS courses", err);
    res.status(500).send("Something went wrong, try again after some time.");
  }
});

router.get("/bsit", async (req, res) => {
  try {
    const bsitCourses = await Course.aggregate(
      getPipeline({ "courses.tags": "BSIT" }),
    );
    res.send(bsitCourses);
  } catch (err) {
    console.error("Error fetching BSIT courses", err);
    res.status(500).send("Something went wrong, try again after some time.");
  }
});

export default router;

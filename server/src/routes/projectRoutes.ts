import { Router } from "express";
import { createProject, getProjects } from "../controllers/projectController";

const router = Router();

router.get("/ds", getProjects);
router.post("/", createProject);

export default router;

// postsRoutes.js

import express from "express";
import multer from "multer";
import {
  getAllPosts,
  createPost,
  deletePost,
} from "../controllers/postsController.js";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get("/", getAllPosts);
router.post("/upload", upload.single("image"), createPost);
router.delete("/:id", deletePost);

export default router;

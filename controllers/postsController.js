// controllers/postsController.js

import { PrismaClient } from "@prisma/client";
import { uploadFile, deleteFile, getObjectSignedUrl } from "../s3.js";
import sharp from "sharp";
import crypto from "crypto";

const prisma = new PrismaClient();

const generateFileName = (bytes = 32) =>
  crypto.randomBytes(bytes).toString("hex");

export const getAllPosts = async (req, res) => {
  const posts = await prisma.posts.findMany({ orderBy: [{ created: "desc" }] });
  for (let post of posts) {
    post.imageUrl = await getObjectSignedUrl(post.imageName);
  }
  res.send(posts);
};

export const createPost = async (req, res) => {
  try {
    const file = req.file;
    const caption = req.body.caption;
    const imageName = generateFileName();

    if (!file) {
      throw new Error("No file uploaded");
    }

    const fileBuffer = await sharp(file.buffer)
      .resize({ height: 1920, width: 1080, fit: "contain" })
      .toBuffer();

    await uploadFile(fileBuffer, imageName, file.mimetype);

    const post = await prisma.posts.create({
      data: {
        imageName,
        caption,
      },
    });

    res.status(201).send(post);
  } catch (error) {
    console.error(error);
    res.status(400).send({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  const id = +req.params.id;
  const post = await prisma.posts.findUnique({ where: { id } });

  await deleteFile(post.imageName);

  await prisma.posts.delete({ where: { id: post.id } });
  res.send(post);
};

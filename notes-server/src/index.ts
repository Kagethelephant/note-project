import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();

app.use(express.json()); // parses into json
app.use(cors());

const prisma = new PrismaClient();

app.get("/api/notes", async(req, res) => {

  const notes = await prisma.note.findMany();

  res.json({ message: "success!"});
});

app.listen(5000, () => {
  console.log("server running on localhost:5000");
});


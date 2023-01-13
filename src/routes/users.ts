import prisma from "../prisma/client";
import { Router } from "express";

const router = Router();

router.get("/", async (request, response) => {
  const users = await prisma.user.findMany();

  response.json(users);
});

router.get("/:id", async (request, response) => {
  const userId = Number(request.params.id);
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  response.json(user);
});

router.post("/:id", async (request, response) => {
  const newUser = request.body;

  prisma.user.create(newUser);

  response.status(201).json(newUser);
});

export default router;

import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
app.use(express.json());
const prisma = new PrismaClient();

app.get("/user", async (req, res) => {
  const clients = await prisma.client.findMany();
  return res.json(clients);
});
app.get("/user/:id", async (req, res) => {
  const clients = await prisma.client.findFirst({
    where: {
      id:  Number(req.params.id),
    },
  });
  return res.json(clients);
});

app.post("/user", async (req, res) => {
  const { nome, email } = req.body;

  const existingUser = await prisma.client.findUnique({
    where: {
      nome,
      email,
    },
  });
  if (existingUser) {
    return res.status(400).json({ error: " Email já existente... " });
  }
});
app.put("/user/:id", async (req, res) => {
  const { nome, email } = req.body;
  const client = await prisma.client.update({
    data: {
      nome,
      email,
    },
    where: {
      id: Number(req.params.id),
    },
  });
  return res.json(client);
});
app.delete("/user/:id", async (req, res) => {
  await prisma.client.delete({
    where: {
      id: Number(req.params.id),
    },
  });
  return res.status(204).send();
});

app.listen(5555, () => console.log(" Tá rodando..."));

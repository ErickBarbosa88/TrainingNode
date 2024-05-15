import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function criarUsuarioController(req: Request, res: Response): Promise<void> {
  const { name, email } = req.body;
  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
}

export async function listarUsuariosController(req: Request, res: Response): Promise<void> {
  try {
    const usuarios = await prisma.user.findMany();
    res.status(200).json(usuarios);
  } catch (error) {
    console.error('Erro ao listar usuários:', error);
    res.status(500).json({ error: 'Erro ao listar usuários' });
  }
}

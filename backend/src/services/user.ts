import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function criarUsuario(name: string, email: string) {
  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    return newUser;
  } catch (error) {
    throw new Error(`Erro ao criar usuário: ${error}`);
  }
}

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function criarUsuario(name: string, email: string, password: string) {
  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
    return newUser;
  } catch (error) {
    throw new Error(`Erro ao criar usuário: ${error}`);
  }
}

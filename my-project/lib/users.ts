import { getPrisma } from "@/lib/db";

export type StoredUser = {
  id: number;
  name: string;
  email: string;
  passwordHash: string;
  accountType: string;
};

const memoryUsers = new Map<string, StoredUser>();
let nextMemoryId = 1;

export async function findUserByEmail(email: string): Promise<StoredUser | null> {
  const prisma = getPrisma();
  if (prisma) {
    return prisma.user.findUnique({ where: { email } });
  }

  return memoryUsers.get(email) ?? null;
}

export async function findUserById(id: number): Promise<StoredUser | null> {
  const prisma = getPrisma();
  if (prisma) {
    return prisma.user.findUnique({ where: { id } });
  }

  for (const user of memoryUsers.values()) {
    if (user.id === id) {
      return user;
    }
  }

  return null;
}

export async function createUser(data: {
  name: string;
  email: string;
  passwordHash: string;
  accountType: string;
}): Promise<StoredUser> {
  const prisma = getPrisma();
  if (prisma) {
    return prisma.user.create({ data });
  }

  const user: StoredUser = {
    id: nextMemoryId++,
    ...data,
  };
  memoryUsers.set(data.email, user);
  return user;
}

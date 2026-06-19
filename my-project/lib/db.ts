import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

function getConnectionString() {
  return (
    process.env.POSTGRES_PRISMA_URL ||
    process.env.POSTGRES_URL_NON_POOLING ||
    process.env.DATABASE_URL
  );
}

function createPrismaClient() {
  const connectionString = getConnectionString();
  if (!connectionString) {
    return null;
  }

  return new PrismaClient({
    adapter: new PrismaPg({ connectionString }),
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });
}

export function getPrisma() {
  if (!global.prisma) {
    global.prisma = createPrismaClient() ?? undefined;
  }

  return global.prisma ?? null;
}

export function hasDatabase() {
  return Boolean(getConnectionString());
}

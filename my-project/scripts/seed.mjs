import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { pbkdf2Sync, randomBytes } from "crypto";

const connectionString =
  process.env.POSTGRES_PRISMA_URL ||
  process.env.POSTGRES_URL_NON_POOLING ||
  process.env.DATABASE_URL;

if (!connectionString) {
  console.error("Set DATABASE_URL before running db:seed");
  process.exit(1);
}

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString }),
});

function hashPassword(password) {
  const salt = randomBytes(16).toString("hex");
  const derived = pbkdf2Sync(password, salt, 100_000, 64, "sha512");
  return `${salt}:${derived.toString("hex")}`;
}

async function main() {
  await prisma.user.upsert({
    where: { email: "demo@handcrafted-haven.com" },
    update: {},
    create: {
      name: "Demo Buyer",
      email: "demo@handcrafted-haven.com",
      passwordHash: hashPassword("Demo1234!"),
      accountType: "buyer",
    },
  });

  console.log("Seeded demo user: demo@handcrafted-haven.com / Demo1234!");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString: process.env.POSTGRES_PRISMA_URL || process.env.POSTGRES_URL_NON_POOLING || process.env.DATABASE_URL }) });

async function main() {
  try {
    await prisma.$connect();
    console.log('CONNECTED');
    const res = await prisma.$queryRaw`SELECT 1 as result`;
    console.log('QUERY_RESULT', JSON.stringify(res));
    await prisma.$disconnect();
    process.exit(0);
  } catch (e) {
    console.error('DB_TEST_ERROR');
    console.error(e);
    try { await prisma.$disconnect(); } catch {}
    process.exit(1);
  }
}

main();

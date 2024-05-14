import { PrismaClient } from '@prisma/client';
import chalk from 'chalk';

const prisma = new PrismaClient();

async function main() {
  if (process.env.NODE_ENV === 'production') {
    const error = chalk.bgRedBright.bold;
    console.error(error('\nSeeder should not be running in production!'));
    process.exit(1);
  }

  console.log('running seed');

  await prisma.cat.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Kitty',
      age: 11,
      breed: 'White',
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

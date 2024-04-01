import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

// Function to create and return the Prisma client instance
const prismaClientSingleton = () => {
  // If Prisma client instance doesn't exist, create a new one
  if (!prisma) {
    prisma = new PrismaClient();
  }
  return prisma;
};

// Type for Prisma Client Singleton
type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

// Ensure 'prisma' is recognized globally
const globalPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

// Initialize Prisma client instance
prisma = globalPrisma.prisma ?? prismaClientSingleton();

// Export Prisma client instance
export default prisma;

// Store Prisma client instance globally in non-production environment
if (process.env.NODE_ENV !== 'production') {
  globalPrisma.prisma = prisma;
}

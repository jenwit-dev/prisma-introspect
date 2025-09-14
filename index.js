const { PrismaClient } = require("./generated/prisma");

const prisma = new PrismaClient();

const run = async () => {
  try {
    // findUnique must use a unique field
    // const result = await prisma.product.findUnique({
    //   where: {
    //     id: 1,
    //   },
    // });

    // findUnique vs findUniqueOrThrow
    // same syntax using where
    // same result if record is found
    // findUniqueOrThrow throws an error if no record is found
    // findUnique returns null if no record is found
    // const result = await prisma.product.findUniqueOrThrow({
    //   where: {
    //     id: 1000,
    //   },
    // });

    // findFirst vs findFirstOrThrow
    // const result = await prisma.product.findFirst({}); // returns the first record in the table
    // const result = await prisma.product.findFirstOrThrow({
    //   where: {
    //     price: {
    //       lt: 10000, // less than 10000
    //     },
    //   },
    // });

    // Summary:
    // if record is found, all methods return the record (object)
    // findUnique => object | null
    // findUniqueOrThrow => object | throw error
    // findFirst => object | null
    // findFirstOrThrow => object | throw error

    // findMany returns an array of records
    // const result = await prisma.product.findMany();
    // Returns an empty array if no records found
    // const result = await prisma.product.findMany({
    //   where: {
    //     id: 100,
    //   },
    // });
    // const result = await prisma.brand.findMany({
    //   where: {
    //     id: {
    //       not: 4, // not equal to 4
    //     },
    //   },
    // });

    // Using IN operator with findMany (multiple OR conditions)
    // const result = await prisma.user.findMany({
    //   where: {
    //     id: {
    //       in: [1, 2, 3], // id is 1 or 2 or 3
    //     },
    //   },
    // });

    // notIn operator with findMany
    // const result = await prisma.brand.findMany({
    //   where: {
    //     id: {
    //       notIn: [1, 2, 3],
    //       // id is not 1, 2, or 3
    //     },
    //   },
    // });

    // Like operator with findMany
    // const result = await prisma.user.findMany({
    //   where: {
    //     username: {
    //       contains: "a", // username contains 'a'
    //     },
    //   },
    // });

    // Combining filters with AND (default behavior)
    // const result = await prisma.product.findMany({
    //   where: {
    //     name: {
    //       startsWith: "i",
    //     },
    //     price: {
    //       gt: 55000,
    //     },
    //   },
    // });

    // OR operator
    // const result = await prisma.product.findMany({
    //   where: {
    //     OR: [{ brandId: 2 }, { brandId: 3 }],
    //   },
    // });

    // BETWEEN operator
    // const result = await prisma.product.findMany({
    //   where: {
    //     AND: [{ price: { gt: 30000 } }, { price: { lt: 40000 } }],
    //   },
    // });
    // price is between 30000 and 40000

    // select some columns
    // const result = await prisma.user.findMany({
    //   select: {
    //     id: true,
    //     username: true,
    //     role: true,
    //   },
    // });

    // const result = await prisma.brand.findMany({
    //   where: {
    //     id: 6,
    //   },
    //   include: {
    //     product: {
    //       select: {
    //         id: true,
    //         name: true,
    //         price: true,
    //       },
    //     },
    //   },
    // });

    console.log(JSON.stringify(result, null, 2));
  } catch (err) {
    console.log(err);
  }
};
run();

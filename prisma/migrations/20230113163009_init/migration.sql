-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstname" VARCHAR(255) NOT NULL,
    "lastname" VARCHAR(255) NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

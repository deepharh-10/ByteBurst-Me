-- CreateEnum
CREATE TYPE "DEPT" AS ENUM ('CSE', 'ECE', 'EE', 'ME', 'CE');

-- CreateEnum
CREATE TYPE "YEAR" AS ENUM ('FIRST', 'SECOND', 'THIRD', 'FINAL');

-- CreateEnum
CREATE TYPE "SEX" AS ENUM ('MALE', 'FEMALE');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT,
    "name" TEXT NOT NULL,
    "roll" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "dept" "DEPT",
    "year" "YEAR",
    "sex" "SEX",
    "whatsAppNo" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_roll_key" ON "User"("roll");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

/*
  Warnings:

  - A unique constraint covering the columns `[type]` on the table `cardTypes` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "cardTypes_type_key" ON "cardTypes"("type");

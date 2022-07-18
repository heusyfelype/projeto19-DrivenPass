/*
  Warnings:

  - You are about to drop the column `type` on the `cardTypes` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `cardTypes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `cardTypes` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "cardTypes_type_key";

-- AlterTable
ALTER TABLE "cardTypes" DROP COLUMN "type",
ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "cardTypes_name_key" ON "cardTypes"("name");

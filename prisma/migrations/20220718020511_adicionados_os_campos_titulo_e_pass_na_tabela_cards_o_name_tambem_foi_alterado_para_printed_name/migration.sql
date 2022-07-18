/*
  Warnings:

  - You are about to drop the column `name` on the `cards` table. All the data in the column will be lost.
  - Added the required column `pass` to the `cards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `printedName` to the `cards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `cards` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cards" DROP COLUMN "name",
ADD COLUMN     "pass" TEXT NOT NULL,
ADD COLUMN     "printedName" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

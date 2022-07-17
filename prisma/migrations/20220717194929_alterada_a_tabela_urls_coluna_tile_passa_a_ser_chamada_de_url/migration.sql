/*
  Warnings:

  - You are about to drop the column `title` on the `urls` table. All the data in the column will be lost.
  - Added the required column `url` to the `urls` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "urls" DROP COLUMN "title",
ADD COLUMN     "url" TEXT NOT NULL;

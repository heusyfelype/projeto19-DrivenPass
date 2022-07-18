/*
  Warnings:

  - Added the required column `title` to the `wifiPasses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "wifiPasses" ADD COLUMN     "title" TEXT NOT NULL;

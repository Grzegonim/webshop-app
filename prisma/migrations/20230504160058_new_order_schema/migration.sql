/*
  Warnings:

  - You are about to drop the column `totalCartPrice` on the `order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `order` DROP COLUMN `totalCartPrice`,
    ADD COLUMN `orderPrice` DOUBLE NULL;

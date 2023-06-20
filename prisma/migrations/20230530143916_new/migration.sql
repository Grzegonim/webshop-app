/*
  Warnings:

  - Made the column `promotion` on table `product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `product` MODIFY `promotion` BOOLEAN NOT NULL;

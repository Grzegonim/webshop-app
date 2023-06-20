/*
  Warnings:

  - You are about to alter the column `deliveryPrice` on the `order` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `order` MODIFY `deliveryPrice` DOUBLE NULL;

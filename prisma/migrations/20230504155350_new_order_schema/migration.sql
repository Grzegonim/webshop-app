/*
  Warnings:

  - You are about to drop the column `deliveryPrice` on the `order` table. All the data in the column will be lost.
  - You are about to alter the column `totalCartPrice` on the `order` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `order` DROP COLUMN `deliveryPrice`,
    MODIFY `totalCartPrice` DOUBLE NULL;

/*
  Warnings:

  - You are about to drop the column `productId` on the `order` table. All the data in the column will be lost.
  - You are about to drop the `ordertoproducts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `ordertoproducts` DROP FOREIGN KEY `OrderToProducts_orderId_fkey`;

-- DropForeignKey
ALTER TABLE `ordertoproducts` DROP FOREIGN KEY `OrderToProducts_productId_fkey`;

-- AlterTable
ALTER TABLE `order` DROP COLUMN `productId`,
    ADD COLUMN `cart` JSON NULL;

-- DropTable
DROP TABLE `ordertoproducts`;

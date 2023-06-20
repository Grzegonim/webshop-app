/*
  Warnings:

  - You are about to drop the column `userId` on the `review` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `review` DROP FOREIGN KEY `Review_userId_fkey`;

-- AlterTable
ALTER TABLE `product` ADD COLUMN `userId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `review` DROP COLUMN `userId`;

-- CreateIndex
CREATE UNIQUE INDEX `Product_userId_key` ON `Product`(`userId`);

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

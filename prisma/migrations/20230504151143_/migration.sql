/*
  Warnings:

  - You are about to drop the column `client` on the `order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `order` DROP COLUMN `client`,
    ADD COLUMN `delivery` VARCHAR(191) NULL,
    ADD COLUMN `deliveryPrice` INTEGER NULL,
    ADD COLUMN `description` VARCHAR(191) NULL,
    ADD COLUMN `email` VARCHAR(191) NULL,
    ADD COLUMN `name` VARCHAR(191) NULL,
    ADD COLUMN `phone` VARCHAR(191) NULL,
    ADD COLUMN `totalCartPrice` INTEGER NULL,
    MODIFY `address` VARCHAR(191) NULL;

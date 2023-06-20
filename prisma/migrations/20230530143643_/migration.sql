/*
  Warnings:

  - You are about to drop the column `type` on the `product` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Review` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `product` DROP COLUMN `type`,
    ADD COLUMN `category` VARCHAR(191) NULL,
    ADD COLUMN `promotion` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Review_name_key` ON `Review`(`name`);

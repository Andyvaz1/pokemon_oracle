/*
  Warnings:

  - You are about to drop the column `Weight` on the `Pokemon` table. All the data in the column will be lost.
  - Added the required column `attack` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `defence` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hp` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `speed` to the `Pokemon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `Pokemon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pokemon" DROP COLUMN "Weight",
ADD COLUMN     "attack" INTEGER NOT NULL,
ADD COLUMN     "defence" INTEGER NOT NULL,
ADD COLUMN     "hp" INTEGER NOT NULL,
ADD COLUMN     "speed" INTEGER NOT NULL,
ADD COLUMN     "weight" INTEGER NOT NULL;

/*
  Warnings:

  - You are about to drop the `spaecialAbility` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "spaecialAbility" DROP CONSTRAINT "spaecialAbility_userId_fkey";

-- DropTable
DROP TABLE "spaecialAbility";

-- CreateTable
CREATE TABLE "specialAbility" (
    "specialAbilityId" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "skillList" TEXT NOT NULL,
    "skillSelection" BOOLEAN NOT NULL,
    "tagColor" INTEGER NOT NULL,

    CONSTRAINT "specialAbility_pkey" PRIMARY KEY ("specialAbilityId")
);

-- AddForeignKey
ALTER TABLE "specialAbility" ADD CONSTRAINT "specialAbility_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "Instance" (
    "id" SERIAL NOT NULL,
    "domain" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,
    "instance_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Instance_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Instance_phone_key" ON "Instance"("phone");

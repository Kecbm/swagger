import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { InstanceModule } from './instance/instance.module';

@Module({
  imports: [PrismaModule, InstanceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

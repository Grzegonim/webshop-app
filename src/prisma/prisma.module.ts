import { Module } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';

@Module({
  providers: [PrismaService]
})
export class PrismaModule {}

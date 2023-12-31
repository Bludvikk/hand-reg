import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { APP_GUARD } from '@nestjs/core';
import { AtGuard } from './common/guards';
import { UsersModule } from './users/users.module';
import { EntitiesModule } from './entities/entities.module';
import { ReferencesModule } from './references/references.module';

@Module({
  imports: [AuthModule, PrismaModule, UsersModule, EntitiesModule, ReferencesModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AtGuard
    }
  ]
})
export class AppModule {}

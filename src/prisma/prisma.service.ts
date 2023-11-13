import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {

  constructor() {
    super({
      datasources: {
        db: {
          url: process.env.DATABASE_URL
        }
      },
      log: ['query']
    })
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
      await this.$disconnect();
  }

  async cleanDatabase() {
    if(process.env.NODE_ENV === 'production') return


    return Promise.all([this.user.deleteMany()])
  }
}
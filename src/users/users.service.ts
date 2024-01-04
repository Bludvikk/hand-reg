import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from 'types';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
  ) { }

  findAll() {
    return this.prisma.user.findMany();
  }

  getById(id: string) {
    return this.prisma.user.findUnique({ where: { id: String(id) } });
  }

  update(id: string, updateUserDto: User) {
    return this.prisma.user.update({
      where: { id: id },
      data: {
        ...updateUserDto
      }
    });
  }
  delete(id: string) {
    return this.prisma.user.delete({ where: { id: String(id) } });
  }
}

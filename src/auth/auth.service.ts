import { Body, Injectable } from '@nestjs/common';
import { User } from '../../types'
import { PrismaService } from '../prisma/prisma.service';
import { OmitField } from '../common/utilities/Omitter';
import * as bcrypt from 'bcrypt';

export type UserDto = Omit<User, OmitField>

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) {}


    async signup(dto: UserDto) {
        
        const data = await this.prisma.user.create({
            data: {
                ...dto,

            }
        })
        return data
    }

    async signin() {
        return { message: "signin success"}
    }

    async signout() {
        return { message: "signout success"}
    }

    
}

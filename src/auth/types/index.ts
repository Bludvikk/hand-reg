import { IsNotEmpty, IsString } from 'class-validator';

export type JwtPayload = {
    email: string;
    sub: string;
}

export type JwtPayloadWithRt = JwtPayload & { refreshToken: string };

export type Tokens = {
    access_token: string;
    refresh_token: string;
  };




export class AuthDto {
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

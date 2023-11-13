import { Body, Controller, Post } from '@nestjs/common';
import { AuthService, UserDto } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: UserDto) {
    return this.authService.signup(dto)
  }
  @Post('signin')
  signin() {
    return this.authService.signin()
  }
  @Post('signout')
  signout() {
    return this.authService.signout()
  }
}

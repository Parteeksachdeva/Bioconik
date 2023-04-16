import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(
    @Body() { email, password }: { email: string; password: string },
  ) {
    const jwtToken = await this.authService.signIn(email, password);

    if (jwtToken) {
      return jwtToken;
    }
    throw new BadRequestException('Invalid Credentials');
  }
}

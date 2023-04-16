import { Injectable } from '@nestjs/common';
import { compare } from 'bcrypt';

import { UsersService } from '../users/users.service';
import { JWT_TOKEN_EXPIRY_TIME } from './common/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) return null;
    const isMatch = await compare(password, user.password);
    if (!isMatch) return null;

    const payload = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      isEmailVerified: user.isEmailVerified,
    };
    const authToken = this.jwtService.sign(payload, {
      expiresIn: JWT_TOKEN_EXPIRY_TIME,
    });

    return { user: payload, authToken };
  }
}

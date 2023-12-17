// auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  validateUserById: any;
  constructor(private readonly jwtService: JwtService) {}

  async login(credentials: any): Promise<any> {
    // Implement your login logic here, e.g., validate username and password
    // If credentials are valid, generate and return a JWT token
    const user = await this.validateUser(credentials.username, credentials.password);
    if (user) {
      const payload = { username: user.username, sub: user.userId };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
    return { error: 'Invalid credentials' };
  }

  // Implement your user validation logic, e.g., retrieve user from a database
  // You can replace this with your own logic
  private async validateUser(username: string, password: string): Promise<any> {
    // Example: Fetch user from the database
    // const user = await UserModel.findOne({ username });
    // if (user && await bcrypt.compare(password, user.hashedPassword)) {
    //   return user;
    // }
    return null;
  }

  // Implement your signup logic if needed
  async signup({ username, password }: any): Promise<any> {
    // Implement your signup logic here
    return { message: 'Signup successful' };
  }
}

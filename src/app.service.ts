import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World Qosim, welcome to the world of NestJS!';
  }
}

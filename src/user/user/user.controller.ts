import { Controller, Get, Param, Post, Query, Req } from '@nestjs/common';
import { Request } from 'express';


@Controller('/api/users')
export class UserController {

    @Get('/sample')
    get(): string {
        return 'This action returns all sample';
    }

    @Get('/hello')
    sayHello(
        @Query('first_name') first_name: string,
        @Query('last_name') last_name: string,
    ): string {
        return `Hello ${first_name} ${last_name}`;
    }

    @Get('/:id')
    getByID(
        @Param('id') id: string,
    ):string {
        return `GET ${id}`;
    }

    @Post()
    post(): string {
        return 'This action to adds a new user';
    }
 
}

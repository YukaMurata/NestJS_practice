import { Body, Controller, Get, Post, Query } from '@nestjs/common';

@Controller('hello')
export class HelloController {
  @Get('get')
  async getMessage(@Query('message') message: string): Promise<string> {
    return `Hello ${message}!!!`;
  }

  @Post('post')
  async postMessage(@Body() request: any): Promise<any> {
    return {
      responseMessage: `Hello ${request.message}!!!!!!`,
    };
  }
}

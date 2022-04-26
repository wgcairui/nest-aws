import { Body, Controller, Get, HttpCode, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly appService: AppService;
  /* constructor() {
    this.appService = new AppService();
  } */

  @Get()
  @HttpCode(204)
  @UseGuards()
  getHello(@Body('id') use: any): string {
    console.log(use);

    return this.appService.getHello();
  }
}

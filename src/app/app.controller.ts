import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from '../auth/auth.decorator';

@Public()
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  home() {
    return 'Jobs Portal API';
  }

  @Get('/info')
  getInfo(): object {
    return this.appService.getInfo();
  }
}

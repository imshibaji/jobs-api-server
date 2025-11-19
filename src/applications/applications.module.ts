import { Module } from '@nestjs/common';
import { ApplicationsController } from './applications.controller';
import { ApplicationsService } from './applications.service';
import { DatabaseModule } from 'src/database/database.module';
import { applicationProviders } from './applications.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [ApplicationsController],
  providers: [...applicationProviders, ApplicationsService]
})
export class ApplicationsModule {}

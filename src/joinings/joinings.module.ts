import { Module } from '@nestjs/common';
import { JoiningsService } from './joinings.service';
import { JoiningsController } from './joinings.controller';
import { joiningsProviders } from './joinings.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [JoiningsController],
  providers: [...joiningsProviders, JoiningsService],
})
export class JoiningsModule {}

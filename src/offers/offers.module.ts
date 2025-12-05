import { Module } from '@nestjs/common';
import { OffersService } from './offers.service';
import { OffersController } from './offers.controller';
import { offerProviders } from './offers.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [OffersController],
  providers: [...offerProviders, OffersService],
})
export class OffersModule {}

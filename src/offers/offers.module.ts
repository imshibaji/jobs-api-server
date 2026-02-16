import { Module } from '@nestjs/common';
import { OffersService } from './offers.service';
import { OffersController } from './offers.controller';
import { offerProviders } from './offers.provider';
import { DatabaseModule } from 'src/database/database.module';
import { OffersResolver } from './offers.resolver';

@Module({
  imports: [DatabaseModule],
  controllers: [OffersController],
  providers: [...offerProviders, OffersService, OffersResolver],
})
export class OffersModule {}

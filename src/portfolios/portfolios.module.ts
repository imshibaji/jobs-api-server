import { Module } from '@nestjs/common';
import { PortfoliosService } from './portfolios.service';
import { PortfoliosController } from './portfolios.controller';
import { portfoliosProvider } from './portfolios.provider';
import { DatabaseModule } from 'src/database/database.module';
import { PortfoliosResolver } from './portfolios.resolver';

@Module({
  imports: [DatabaseModule],
  controllers: [PortfoliosController],
  providers: [...portfoliosProvider, PortfoliosService, PortfoliosResolver],
})
export class PortfoliosModule {}

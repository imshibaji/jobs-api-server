import { forwardRef, Module } from '@nestjs/common';
import { PortfoliosService } from './portfolios.service';
import { PortfoliosController } from './portfolios.controller';
import { portfoliosProvider } from './portfolios.provider';
import { DatabaseModule } from 'src/database/database.module';
import { PortfoliosResolver } from './portfolios.resolver';
import { ApplicantsModule } from 'src/applicants/applicants.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    DatabaseModule,
    forwardRef(() => ApplicantsModule),
    forwardRef(() => UsersModule),
  ],
  controllers: [PortfoliosController],
  providers: [...portfoliosProvider, PortfoliosService, PortfoliosResolver],
  exports: [PortfoliosService],
})
export class PortfoliosModule {}

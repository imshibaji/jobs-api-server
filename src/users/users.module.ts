import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { DatabaseModule } from 'src/database/database.module';
import { userProviders } from './users.providers';
import { UsersResolver } from './users.resolver';
import { ApplicantsModule } from 'src/applicants/applicants.module';

@Module({
  imports: [
    DatabaseModule,
    forwardRef(() => ApplicantsModule),
  ],
  controllers: [UsersController],
  providers: [...userProviders, UsersService, UsersResolver],
  exports: [UsersService],
})
export class UsersModule {}

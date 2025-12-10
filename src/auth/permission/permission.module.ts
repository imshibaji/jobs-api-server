import { Module } from '@nestjs/common';
import { CaslAbilityFactory } from './casl-ability.factory';
import { PoliciesGuard } from './policies.guard';

@Module({
    imports: [],
    providers: [CaslAbilityFactory, PoliciesGuard],
    exports: [CaslAbilityFactory],
})
export class PermissionModule {}

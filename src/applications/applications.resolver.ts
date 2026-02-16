import { Args, Query, Resolver } from '@nestjs/graphql';
import { ApplicationsService } from './applications.service';
import { Application } from './application.entity';

@Resolver()
export class ApplicationsResolver {
    constructor(private readonly applicationsService: ApplicationsService) {}

    @Query(() => [Application])
    async applications() {
        return this.applicationsService.findAll();
    }

    @Query(() => Application, { nullable: true })
    async application(@Args('id') id: number) {
        return this.applicationsService.findOne(id);
    }


    async createApplication(createApplicationInput: any) {
        return this.applicationsService.create(createApplicationInput);
    }

    async updateApplication(id: number, updateApplicationInput: any) {
        return this.applicationsService.update(id, updateApplicationInput);
    }

    async deleteApplication(id: number) {
        return this.applicationsService.remove(id);
    }
}

import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { OffersService } from './offers.service';
import { Offer } from './entities/offer.entity';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferInput } from './dto/update-offer.dto';
import { User } from 'src/users/users.entity';
import { UsersService } from 'src/users/users.service';
import { ApplicantsService } from 'src/applicants/applicants.service';
import { JobsService } from 'src/jobs/jobs.service';
import { ApplicationsService } from 'src/applications/applications.service';
import { Applicant } from 'src/applicants/applicant.entity';
import { Job } from 'src/jobs/job.entity';
import { Application } from 'src/applications/application.entity';

@Resolver(() => Offer)
export class OffersResolver {
  constructor(
    private readonly offersService: OffersService,
    private readonly applicantsService: ApplicantsService,
    private readonly applicationsService: ApplicationsService,
    private readonly jobsService: JobsService,
    private readonly usersService: UsersService,
  ) {}

  @Query(() => [Offer])
  async offers() {
    return this.offersService.findAll();
  }

  @Query(() => Offer, { nullable: true })
  async offer(id: number) {
    return this.offersService.findOne(id);
  }

  @ResolveField(() => Applicant, { nullable: true })
  async applicant(@Parent() offer: Offer) {
    if (!offer.applicantId) return null;
    return this.applicantsService.findOne(offer.applicantId!);
  }

  @ResolveField(() => Job, { nullable: true })
  async job(@Parent() offer: Offer) {
    if (!offer.jobId) return null;
    return this.jobsService.findOne(offer.jobId!);
  }

  @ResolveField(() => Application, { nullable: true })
  async application(@Parent() offer: Offer) {
    if (!offer.applicationId) return null;
    return this.applicationsService.findOne(offer.applicationId!);
  }

  @ResolveField(() => User, { nullable: true })
  async user(@Parent() offer: Offer) {
    if (!offer.userId) return null;
    return this.usersService.findOne(offer.userId!);
  }

  @Mutation(() => Offer)
  async createOffer(@Args('offer') offer: CreateOfferDto) {
    return await this.offersService.create(offer);
  }

  @Mutation(() => Offer)
  async updateOffer(
    @Args('id') id: number,
    @Args('offer') offer: UpdateOfferInput,
  ) {
    await this.offersService.update(id, offer);
    return await this.offersService.findOne(id);
  }

  @Mutation(() => Boolean)
  async deleteOffer(@Args('id') id: number) {
    return await this.offersService.remove(id);
  }
}

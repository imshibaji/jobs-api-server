import { Job } from 'src/jobs/job.entity';
import { setSeederFactory } from 'typeorm-extension';

export const jobFactory = setSeederFactory(Job, async (faker) => {
  const job = new Job();
  job.title = faker.person.jobTitle();
  job.description = faker.lorem.sentence();
  job.location = faker.location.city();
  job.salary = faker.number.int({ min: 10000, max: 100000 });
  job.salaryRange = faker.number.int({ min: 10000, max: 100000 }).toString();
  job.salaryType = faker.lorem.word();
  job.experience = faker.lorem.word();
  job.requirements = faker.lorem.word();
  job.employmentType = faker.lorem.word();
  job.currency = faker.lorem.word();
  job.responsibilities = faker.lorem.word();
  job.benefits = faker.lorem.word();
  job.careerRestarters = faker.lorem.word();
  job.equipmentPolicy = faker.lorem.word();
  job.isRemote = true;
  job.companyId = 1;
  job.createdAt = new Date();
  job.updatedAt = new Date();
  return job;
});

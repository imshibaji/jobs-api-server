import { Application } from 'src/applications/application.entity';
import { setSeederFactory } from 'typeorm-extension';

export const applicationFactory = setSeederFactory(Application, (faker) => {
  const application = new Application();
  application.coverLetter = faker.lorem.sentences();
  application.details = faker.lorem.paragraphs();
  application.status = 'pending';
  application.resume = faker.system.commonFileName('pdf');
  application.userId = 1; // User As Recruiter
  application.jobId = 1;
  application.applicantId = 1;
  return application;
});

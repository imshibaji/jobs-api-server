import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { User } from 'src/users/users.entity';
import { Applicant } from 'src/applicants/applicant.entity';
import { Company } from 'src/companies/company.entity';
import { Job } from 'src/jobs/job.entity';
import { Education } from 'src/education/education.entity';
import { Experience } from 'src/experiences/experience.entity';
import { Skill } from 'src/skills/skill.entity';
import { Portfolio } from 'src/portfolios/entities/portfolio.entity';
import { Application } from 'src/applications/application.entity';
import { Interview } from 'src/interviews/entities/interview.entity';
import { Offer } from 'src/offers/entities/offer.entity';

export default class MainSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    this.clear(dataSource);

    const userFactory = factoryManager.get(User);
    const applicantFactory = factoryManager.get(Applicant);
    const educationFactory = factoryManager.get(Education);
    const experienceFactory = factoryManager.get(Experience);
    const portfolioFactory = factoryManager.get(Portfolio);
    const skillFactory = factoryManager.get(Skill);
    const companyFactory = factoryManager.get(Company);
    const jobFactory = factoryManager.get(Job);
    const applicationFactory = factoryManager.get(Application);
    const interviewFactory = factoryManager.get(Interview);
    const offerFactory = factoryManager.get(Offer);

    // This creates and saves 20 users to the database
    // await userFactory.saveMany(20);
    for (let i = 0; i < 10; i++) {
      const user = await userFactory.save();

      // Applicant seeder
      const applicant = await applicantFactory.save({
        name: user.name,
        email: user.email,
        phoneNumber: user.phoneNumber,
        image: user.image,
        userId: user.id,
      });
      const education = await educationFactory.save({
        applicantId: applicant.id,
      });
      const experience = await experienceFactory.save({
        applicantId: applicant.id,
      });
      const portfolio = await portfolioFactory.save({
        applicantId: applicant.id,
      });
      const skill = await skillFactory.save({
        applicantId: applicant.id,
      });

      // Employer seeder
      const company = await companyFactory.save({
        userId: user.id,
      });
      const job = await jobFactory.save({
        userId: user.id,
        companyId: company.id,
      });

      // Application seeder
      const application = await applicationFactory.save({
        jobId: job.id,
        applicantId: applicant.id,
        userId: user.id,
      });
      const interview = await interviewFactory.save({
        applicationId: application.id,
        userId: user.id,
        jobId: job.id,
      });
      const offer = await offerFactory.save({
        applicantId: applicant.id,
        applicationId: application.id,
        userId: user.id,
        jobId: job.id,
      });
    }
  }

  public async clear(dataSource: DataSource): Promise<any> {
    // 1. Disable foreign key checks (Postgres specific) to avoid dependency errors
    await dataSource.query(
      'TRUNCATE TABLE users, interview, companies, offer, jobs, applications, portfolios, applicants, articles, education, experiences, skills RESTART IDENTITY CASCADE;',
    );
  }
}

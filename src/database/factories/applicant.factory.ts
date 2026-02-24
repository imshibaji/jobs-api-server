import { Applicant } from 'src/applicants/applicant.entity';
import { setSeederFactory } from 'typeorm-extension';

export const applicantFactory = setSeederFactory(Applicant, async (faker) => {
  const applicant = new Applicant();
  applicant.name = faker.person.fullName();
  applicant.email = faker.internet.email().toLowerCase();
  applicant.phoneNumber = faker.phone.number();
  applicant.image = faker.image.avatar();
  applicant.resume = faker.system.commonFileName('pdf');
  applicant.address = faker.location.streetAddress();
  applicant.city = faker.location.city();
  applicant.state = faker.location.state();
  applicant.country = faker.location.country();
  applicant.zipCode = faker.location.zipCode();
  applicant.bio = faker.lorem.sentence();
  applicant.dob = faker.date.birthdate().toDateString();
  applicant.gender = faker.person.gender();
  applicant.highestEducation = faker.lorem.text();
  applicant.experience = faker.person.jobTitle();
  applicant.skills = faker.lorem.words();
  applicant.location = faker.location.city();
  applicant.expectedMonthlySalary = faker.number.int().toString();
  applicant.interestedIndustry = faker.lorem.word();
  applicant.preferredCommunication = faker.lorem.word();
  applicant.createdAt = new Date();
  applicant.updatedAt = new Date();
  return applicant;
});

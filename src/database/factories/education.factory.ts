import { Education } from 'src/education/education.entity';
import { setSeederFactory } from 'typeorm-extension';

export const educationFactory = setSeederFactory(Education, async (faker) => {
  const education = new Education();
  education.degree = faker.person.jobTitle();
  education.fieldOfStudy = faker.word.verb();
  education.institution = faker.company.name();
  education.startDate = faker.date.past();
  education.endDate = faker.date.future();
  education.applicantId = 1;
  return education;
});

import { Experience } from "src/experiences/experience.entity";
import { setSeederFactory } from "typeorm-extension";

export const experienceFactory = setSeederFactory(Experience, async (faker) => {
    const experience = new Experience();
    experience.company = faker.company.name();
    experience.position = faker.person.jobTitle();
    experience.startDate = faker.date.past();
    experience.endDate = faker.date.future();
    experience.usedSkills = faker.word.verb();
    experience.location = faker.location.city();
    experience.applicantId = 1;
    return experience;
});
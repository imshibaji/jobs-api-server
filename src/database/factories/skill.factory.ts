import { Skill } from "src/skills/skill.entity";
import { setSeederFactory } from "typeorm-extension";

export const skillFactory = setSeederFactory(Skill, (faker) => {
    const skill = new Skill();
    skill.name = faker.lorem.word();
    skill.proficiency = faker.lorem.word();
    skill.experience = faker.lorem.word();
    skill.lastUsed = faker.date.recent();
    skill.applicantId = 1;
    return skill;
});
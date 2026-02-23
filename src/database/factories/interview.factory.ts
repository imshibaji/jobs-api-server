import { Interview } from "src/interviews/entities/interview.entity";
import { setSeederFactory } from "typeorm-extension";

export const interviewFactory = setSeederFactory(Interview, (faker) => {
    const interview = new Interview();
    interview.notes = faker.lorem.sentences();
    interview.status = faker.lorem.word();
    interview.date = faker.date.future();
    interview.time = '10:00';
    interview.location = faker.location.city();
    interview.applicationId = 1;
    interview.userId = 1;
    interview.jobId = 1;
    return interview;
});
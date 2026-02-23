import { Company } from "src/companies/company.entity";
import { setSeederFactory } from "typeorm-extension";

export const companyFactory = setSeederFactory(Company, async (faker) => {
    const company = new Company();
    company.name = faker.company.name();
    company.email = faker.internet.email().toLowerCase();
    company.phoneNumber = faker.phone.number();
    company.image = faker.image.avatar();
    company.address = faker.location.streetAddress();
    company.city = faker.location.city();
    company.state = faker.location.state();
    company.country = faker.location.country();
    company.zipCode = faker.location.zipCode();
    company.description = faker.lorem.sentence();
    company.website = faker.internet.url();
    company.founded = faker.date.past().getFullYear();
    company.size = faker.number.int().toString();
    company.industryType = faker.lorem.word();
    company.culture = faker.lorem.word();
    company.recruiterName = faker.person.fullName();
    company.createdAt = new Date();
    company.updatedAt = new Date();
    return company;
});
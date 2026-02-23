import { Portfolio } from "src/portfolios/entities/portfolio.entity";
import { setSeederFactory } from "typeorm-extension";

export const portfolioFactory = setSeederFactory(Portfolio, (faker) => {
    const portfolio = new Portfolio();
    portfolio.title = faker.lorem.word();
    portfolio.description = faker.lorem.sentence();
    portfolio.image = faker.image.url();
    portfolio.url = faker.internet.url();
    portfolio.userId = 1;
    portfolio.applicantId = 1;
    return portfolio;
});
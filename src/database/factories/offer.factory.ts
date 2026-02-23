import { Offer } from "src/offers/entities/offer.entity";
import { setSeederFactory } from "typeorm-extension";

export const offerFactory = setSeederFactory(Offer, (faker) => {
    const offer = new Offer();
    offer.message = faker.lorem.sentences();
    offer.status = faker.lorem.word();
    offer.date = faker.date.future().toString();
    offer.attachment = faker.system.commonFileName('pdf');
    offer.applicationId = 1;
    offer.userId = 1;
    offer.jobId = 1;
    offer.applicantId = 1;
    offer.type = 'offer';
    offer.status = 'pending';
    return offer;
});
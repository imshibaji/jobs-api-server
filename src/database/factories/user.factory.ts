import { setSeederFactory } from 'typeorm-extension';
import { User } from "src/users/users.entity";

export const UserFactory = setSeederFactory(User, (faker) => {
    const user = new User();
    user.name = faker.person.fullName();
    user.email = faker.internet.email();
    user.password = 'password123'; // Hardcoded for easy testing
    user.role = 'user';
    user.phoneNumber = faker.phone.number();
    user.image = faker.image.avatar();
    user.createdAt = new Date();
    user.updatedAt = new Date();
    return user;
});
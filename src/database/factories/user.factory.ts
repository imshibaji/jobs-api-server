import { setSeederFactory } from 'typeorm-extension';
import { User } from '../../users/users.entity';
import { hashPassword } from '../../auth/utils/encryption';

export const UserFactory = setSeederFactory(User, async (faker) => {
  const user = new User();
  user.name = faker.person.fullName();
  user.email = faker.internet.email().toLowerCase();
  user.password = await hashPassword('password'); // Hardcoded for easy testing
  user.role = 'user';
  user.phoneNumber = faker.phone.number();
  user.image = faker.image.avatar();
  user.createdAt = new Date();
  user.updatedAt = new Date();
  return user;
});

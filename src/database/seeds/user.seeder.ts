import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { User } from 'src/users/users.entity';

export default class UserSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager
    ): Promise<any> {
        const userFactory = await factoryManager.get(User);

        // This creates and saves 20 users to the database
        await userFactory.saveMany(20);
    }
}
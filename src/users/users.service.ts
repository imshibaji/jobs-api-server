import { Inject, Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
    constructor(
        @Inject('USER_REPOSITORY')
        private usersRepository: Repository<User>
    ) {}

    async findAll(): Promise<User[]> {
        return await this.usersRepository.find();
    }

    async findOne(id: number): Promise<User | null> {
        return await this.usersRepository.findOne({ where: { id } });
    }

    async findByEmail(email: string): Promise<User | null> {
        return await this.usersRepository.findOne({ where: { email } });
    }
    
    async findByPhoneNumber(phoneNumber: string): Promise<User | null> {
        return await this.usersRepository.findOne({ where: { phoneNumber } });
    }

    async create(user: Partial<User>): Promise<User> {
        return await this.usersRepository.save(user);
    }

    async update(id: number, user: Partial<User>): Promise<UpdateResult> {
        return await this.usersRepository.update(id, {...user, updatedAt: new Date() });
    }

    async delete(id: number): Promise<DeleteResult> {
        const user = await this.findOne(id);
        if (!user) {
            throw new Error('User not found');
        }

        return await this.usersRepository.delete(id);
    }
}

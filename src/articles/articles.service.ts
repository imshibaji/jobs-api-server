import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Article } from './article.entity';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Injectable()
export class ArticlesService {
    constructor(
        @Inject('ARTICLE_REPOSITORY')
        private readonly articleRepository: Repository<Article>,
    ) {}

    findAll(): Promise<Article[]> {
        return this.articleRepository.find();
    }

    findOne(id: number): Promise<Article | null> {
        return this.articleRepository.findOneBy({ id });
    }

    async create(article: CreateArticleDto): Promise<Article> {
        return this.articleRepository.save(article);
    }

    async update(id: number, article: UpdateArticleDto): Promise<Article | null> {
        await this.articleRepository.update(id, article);
        return this.articleRepository.findOneBy({ id });
    }

    async remove(id: number): Promise<void> {
        await this.articleRepository.delete(id);
    }

    async publish(id: number): Promise<Article | null> {
        const article = await this.articleRepository.findOneBy({ id });
        if (!article) {
            return null;
        }
        article.isPublished = true;
        article.publishedAt = new Date();
        await this.articleRepository.save(article);
        return article;
    }

    async archive(id: number): Promise<Article | null> {
        const article = await this.articleRepository.findOneBy({ id });
        if (!article) {
            return null;
        }
        article.isArchived = true;
        await this.articleRepository.save(article);
        return article;
    }

    async unarchive(id: number): Promise<Article | null> {
        const article = await this.articleRepository.findOneBy({ id });
        if (!article) {
            return null;
        }
        article.isArchived = false;
        await this.articleRepository.save(article);
        return article;
    }

    async delete(id: number): Promise<Article | null> {
        const article = await this.articleRepository.findOneBy({ id });
        if (!article) {
            return null;
        }
        article.isDeleted = true;
        await this.articleRepository.save(article);
        return article;
    }
    
    async restore(id: number): Promise<Article | null> {
        const article = await this.articleRepository.findOneBy({ id });
        if (!article) {
            return null;
        }
        article.isDeleted = false;
        await this.articleRepository.save(article);
        return article;
    }
}

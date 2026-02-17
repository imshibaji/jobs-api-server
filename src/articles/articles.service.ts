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


    async searchBy(prop: string, value: string): Promise<Article[]> {
        return await this.articleRepository.findBy({ [prop]: value });
    }

    async findAll(): Promise<Article[]> {
        return await this.articleRepository.find();
    }

    async findBySlug(slug: string): Promise<Article | null> {
        return await this.articleRepository.findOneBy({ slug });
    }

    async findOne(id: number): Promise<Article | null> {
        return await this.articleRepository.findOneBy({ id });
    }

    async create(article: CreateArticleDto): Promise<Article> {
        article.slug = article.slug || article.title.replace(/\s+/g, '-').toLowerCase();
        return await this.articleRepository.save(article);
    }

    async update(id: number, article: UpdateArticleDto): Promise<Article | null> {
        article.slug = article.slug || article.title?.replace(/\s+/g, '-').toLowerCase();
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

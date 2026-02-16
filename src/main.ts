import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import compression from 'compression';
// import * as express from 'express';
// import { join } from 'path';
import { swaggerDarkModeMiddleware } from '@debiprasadmishra50/swagger-dark-mode';
import * as packageJson from '../package.json';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors('*');

  // Apply dark mode middleware before Swagger setup
  app.use('/', swaggerDarkModeMiddleware);

  // app.use(helmet({
  //   crossOriginResourcePolicy: { policy: "cross-origin" },
  //   contentSecurityPolicy: {
  //     directives: {
  //       defaultSrc: [`'self'`],
  //       styleSrc: [`'self'`, `'unsafe-inline'`, 'https://unpkg.com'],
  //       scriptSrc: [`'self'`, `'unsafe-inline'`, 'https://unpkg.com'],
  //       imgSrc: [`'self'`, 'data:', 'https://graphql-hero.com', 'http://localhost:3300'], // For Apollo icons
  //       // Add other directives as necessary
  //     },
  //   },
  //   // contentSecurityPolicy: false, // Disable CSP to allow Swagger UI to load resources without restrictions
  //   // crossOriginEmbedderPolicy: false,
  // }));


  // Enable helmet
  app.use(helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" },
    contentSecurityPolicy: false, // Disable CSP to allow Swagger UI to load resources without restrictions
    crossOriginEmbedderPolicy: false,
    crossOriginOpenerPolicy: false,
  }));

  // Enable compression
  app.use(compression());
  

  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('Jobs Portal API Documentation')
    .setDescription('The Jobs Portal API Documentation')
    .setContact('Shibaji Debnath', 'https://shibajidebnath.com', 'imshibaji@gmail.com')
    .setExternalDoc('Auth API Documentation', '/api/auth/docs')
    .addBearerAuth()
    .setVersion(packageJson.version || '1.0.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config, {
    autoTagControllers: true,
    ignoreGlobalPrefix: true,
  });
  SwaggerModule.setup('', app, documentFactory, {
    customSiteTitle: 'Jobs Portal API Documentation',
    customCssUrl: '/static/css/swagger-dark.css',
  });

  // Provide global prefix for all routes except GraphQL
  app.setGlobalPrefix('', {
    exclude: ['graphql'], // Optional: excludes the default path if needed
  });

  await app.listen(process.env.APP_PORT ?? 3300);
}
bootstrap();

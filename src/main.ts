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

  // Serve static files, including your custom CSS
  // app.use('/', express.static(join(__dirname, '..', 'public')));

  // Enable CORS
  app.enableCors({
    origin: '*', // Replace with the actual URL of your client app (e.g., 'https://yourfrontend.com')
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Apply dark mode middleware before Swagger setup
  app.use('/', swaggerDarkModeMiddleware);

  app.use(helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: [`'self'`],
        styleSrc: [`'self'`, `'unsafe-inline'`],
        scriptSrc: [`'self'`, `'unsafe-inline'`],
        // Add other directives as necessary
      },
    },
  }));
  app.use(compression());
  

  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('Jobs Portal API Documentation')
    .setDescription('The Jobs Portal API Documentation')
    .setContact('Shibaji Debnath', 'https://shibajidebnath.com', 'imshibaji@gmail.com')
    .setExternalDoc('Auth API Documentation', '/api/auth/docs')
    .addServer(process.env.APP_URL || 'http://localhost:3300')
    .addBearerAuth()
    .setVersion(packageJson.version || '1.0.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config, {
    autoTagControllers: true,
    ignoreGlobalPrefix: true,
  });
  SwaggerModule.setup('', app, documentFactory, {
    customSiteTitle: 'Jobs Portal API Documentation',
    customCssUrl: '/css/swagger-dark.css',
  });

  await app.listen(process.env.APP_PORT ?? 3300);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.use(compression());
  // Enable CORS
  app.enableCors({
    origin: '*', // Replace with the actual URL of your client app (e.g., 'https://yourfrontend.com')
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Jobs Portal API Documentation')
    .setDescription('The Jobs Portal API Documentation')
    .setContact('Shibaji Debnath', 'https://shibajidebnath.com', 'imshibaji@gmail.com')
    .setExternalDoc('Auth API Documentation', '/api/auth/docs')
    .addServer(process.env.APP_URL || 'http://localhost:3300')
    .addBearerAuth()
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('', app, documentFactory);

  await app.listen(process.env.APP_PORT ?? 3300);
}
bootstrap();

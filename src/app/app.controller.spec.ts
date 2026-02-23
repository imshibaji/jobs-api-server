import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "App Info"', () => {
      expect(appController.getInfo()).toBe(`{
        "appName": "jobs-api-server",
        "appVersion": "1.0.0",
        "appEnvironment": "development",
        "appPort": 3300,
        "appBaseUrl": "http://localhost:3300",
        "appSecretKey": "app_key"}`);
    });
  });
});

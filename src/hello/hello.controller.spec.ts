import { Test, TestingModule } from '@nestjs/testing';
import { HelloController } from './hello.controller';

describe('HelloController', () => {
  let controller: HelloController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HelloController],
    }).compile();

    controller = module.get<HelloController>(HelloController);
  });

  it('should return "Hello NestJS!!"', async () => {
    expect(await controller.getMessage('NestJS')).toBe('Hello NestJS!!');
  });

  it('should return "Hello NestJS!!" object', async () => {
    expect(await controller.postMessage({ message: 'NestJS' })).toEqual({
      responseMessage: 'Hello NestJS!!',
    });
  });
});

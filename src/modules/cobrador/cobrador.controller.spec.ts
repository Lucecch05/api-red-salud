import { Test, TestingModule } from '@nestjs/testing';
import { CobradorController } from './cobrador.controller';

describe('CobradorController', () => {
  let controller: CobradorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CobradorController],
    }).compile();

    controller = module.get<CobradorController>(CobradorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

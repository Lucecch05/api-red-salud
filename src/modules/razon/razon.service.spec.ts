import { Test, TestingModule } from '@nestjs/testing';
import { RazonService } from './razon.service';

describe('RazonService', () => {
  let service: RazonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RazonService],
    }).compile();

    service = module.get<RazonService>(RazonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

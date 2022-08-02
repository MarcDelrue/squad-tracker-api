import { Test, TestingModule } from '@nestjs/testing';
import { CoordinatesGateway } from './coordinates.gateway';
import { CoordinatesService } from './coordinates.service';

describe('CoordinatesGateway', () => {
  let gateway: CoordinatesGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoordinatesGateway, CoordinatesService],
    }).compile();

    gateway = module.get<CoordinatesGateway>(CoordinatesGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});

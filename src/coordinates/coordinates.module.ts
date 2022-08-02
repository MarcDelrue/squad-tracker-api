import { Module } from '@nestjs/common';
import { CoordinatesService } from './coordinates.service';
import { CoordinatesGateway } from './coordinates.gateway';

@Module({
  providers: [CoordinatesGateway, CoordinatesService]
})
export class CoordinatesModule {}

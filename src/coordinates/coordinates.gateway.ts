import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { CoordinatesService } from './coordinates.service';
import { CreateCoordinateDto } from './dto/create-coordinate.dto';
import { UpdateCoordinateDto } from './dto/update-coordinate.dto';

@WebSocketGateway()
export class CoordinatesGateway {
  constructor(private readonly coordinatesService: CoordinatesService) {}

  @SubscribeMessage('createCoordinate')
  create(@MessageBody() createCoordinateDto: CreateCoordinateDto) {
    return this.coordinatesService.create(createCoordinateDto);
  }

  @SubscribeMessage('findAllCoordinates')
  findAll() {
    return this.coordinatesService.findAll();
  }

  @SubscribeMessage('findOneCoordinate')
  findOne(@MessageBody() id: number) {
    return this.coordinatesService.findOne(id);
  }

  @SubscribeMessage('updateCoordinate')
  update(@MessageBody() updateCoordinateDto: UpdateCoordinateDto) {
    return this.coordinatesService.update(updateCoordinateDto.id, updateCoordinateDto);
  }

  @SubscribeMessage('removeCoordinate')
  remove(@MessageBody() id: number) {
    return this.coordinatesService.remove(id);
  }
}

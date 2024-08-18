import { Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { NATS_SERVICE } from '../config/constants/services';

@Controller('movies')
export class MoviesController {
  constructor(@Inject(NATS_SERVICE) private readonly client: ClientProxy) {}

  @Post('add')
  add() {
    return this.client.send('movies.add', {});
  }
}

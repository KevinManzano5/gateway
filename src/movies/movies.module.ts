import { Module } from '@nestjs/common';

import { MoviesController } from './movies.controller';
import { NatsModule } from '../transports/nats.module';

@Module({
  controllers: [MoviesController],
  providers: [],
  imports: [NatsModule],
})
export class MoviesModule {}

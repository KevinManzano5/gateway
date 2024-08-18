import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { NatsModule } from './transports/nats.module';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [AuthModule, NatsModule, MoviesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
